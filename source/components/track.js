import React, { Children, Component, cloneElement } from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import SoundPlayer from "react-native-sound-player"
import { seconds } from "../helpers"
import { Times } from "./icons"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const ScrollContainer = styled.ScrollView`
    display: flex;
    width: 100%;
    height: 100%;
`

const CloseButton = styled.View`
    display: flex;
    width: 64px;
    height: 64px;
    border-radius: 64;
    background-color: #999;
    opacity: 0.05;
    position: absolute;
    top: 16px;
    right: 16px;
    align-items: center;
    justify-content: center;
`

class Track extends Component {
    static propTypes = {
        isAnimating: PropTypes.bool,
        isPlaying: PropTypes.bool,
    }

    static defaultProps = {
        isAnimating: false,
        isPlaying: false,
    }

    onClose = () => {
        const { onClosed } = this.props

        this.stopMusic()

        if (onClosed) {
            onClosed()
        }
    }

    componentDidMount() {
        const { isPlaying } = this.props

        if (isPlaying) {
            this.playMusic()
        }

        this.forceUpdateTimer = setInterval(() => {
            const { isPlaying } = this.props

            if (isPlaying) {
                this.forceUpdate()
            }
        }, 500)

        this.cacheVerses()
    }

    playMusic = () => {
        const { music, onFinished } = this.props

        SoundPlayer.onFinishedLoading(() => {
            this.startedAt = new Date()
        })

        // TODO
        // we need a better way of waiting
        // for the file to load, so we don't
        // desync the music and words
        SoundPlayer.playSoundFile(music, "mp3")

        if (onFinished) {
            SoundPlayer.onFinishedPlaying(onFinished)
        }
    }

    stopMusic = () => {
        try {
            SoundPlayer.stop()
            SoundPlayer.unmount()
        } catch (e) {
            // this fails if executed multiple times
            // which can happen with props change AND unmount
        }

        this.startedAt = undefined
    }

    shouldComponentUpdate() {
        return new Date().getSeconds() !== this.startedAt.getSeconds()
    }

    componentDidUpdate(previousProps) {
        const { isPlaying } = this.props

        if (previousProps.isPlaying && !isPlaying) {
            this.stopMusic()
        }

        if (!previousProps.isPlaying && isPlaying) {
            this.playMusic()
        }

        this.cacheVerses()
    }

    cacheVerses = () => {
        const { children, cues } = this.props

        const verses = []
        const limits = []

        Children.forEach(children, child => {
            if (child.type.name === "Verse") {
                verses.push(child)
            }
        })

        for (let i = 0; i < cues.length; i++) {
            if (i < cues.length - 1) {
                limits.push([seconds(cues[i]), seconds(cues[i + 1])])
            } else {
                limits.push([seconds(cues[i]), 999999])
            }
        }

        this.verses = verses
        this.limits = limits
    }

    componentWillUnmount() {
        const { isPlaying } = this.props

        if (isPlaying) {
            this.stopMusic()
        }

        clearTimeout(this.forceUpdateTimer)
    }

    processChildren = () => {
        const { children } = this.props
        const { verses, limits } = this

        const processed = []

        Children.forEach(children, (child, key) => {
            if (child.type.name === "Verse") {
                processed.push(
                    cloneElement(child, {
                        key,
                    }),
                )
            }

            if (child.type.name === "Repeat") {
                processed.push(
                    cloneElement(child, {
                        ...child.props,
                        verses: verses,
                        key,
                    }),
                )
            }
        })

        return [processed, limits]
    }

    render() {
        const { isAnimating } = this.props

        if (isAnimating) {
            return (
                <Container>
                    {this.renderAnimatedChildren()}
                    {this.renderCloseButton()}
                </Container>
            )
        }

        return (
            <ScrollContainer>
                {this.renderStaticChildren()}
                {this.renderCloseButton()}
            </ScrollContainer>
        )
    }

    renderStaticChildren = () => {
        const [children] = this.processChildren()
        return children
    }

    renderAnimatedChildren = () => {
        if (!this.startedAt) {
            return []
        }

        const [children, limits] = this.processChildren()

        const diff = (new Date().getTime() - this.startedAt.getTime()) / 1000
        const shown = []

        for (let i = 0; i < children.length; i++) {
            if (diff >= limits[i][0] && diff < limits[i][1]) {
                shown.push(children[i])
            }
        }

        return shown
    }

    renderCloseButton = () => {
        return (
            <TouchableWithoutFeedback onPress={this.onClose}>
                <CloseButton>
                    <Times />
                </CloseButton>
            </TouchableWithoutFeedback>
        )
    }
}

export { Track }
