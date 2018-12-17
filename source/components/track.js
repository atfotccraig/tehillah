import React, { Children, Component, cloneElement } from "react"
import { AppState, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import SoundPlayer from "react-native-sound-player"
import { relativeSize, seconds } from "../helpers"
import { Times } from "./icons"
import moment from "moment"
import { Title, Repeat, Verse } from "."

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
`

const ScrollContainer = styled.ScrollView`
    display: flex;
    width: 100%;
    height: 100%;
`

const CloseButton = styled.View`
    display: flex;
    width: ${relativeSize(64)}px;
    height: ${relativeSize(64)}px;
    border-radius: ${relativeSize(64)};
    background-color: #999;
    opacity: 0.05;
    position: absolute;
    top: ${relativeSize(16)}px;
    right: ${relativeSize(64)}px;
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

    state = {
        nowAt: new Date(),
    }

    onClose = () => {
        this.stopMusic()

        if (this.props.onClosed) {
            this.props.onClosed()
        }
    }

    componentDidMount() {
        if (this.props.isPlaying) {
            this.playMusic()
        }

        this.forceUpdateTimer = setInterval(() => {
            if (this.props.isPlaying) {
                this.setState({ nowAt: new Date() })
            }
        }, 250)

        this.cacheVerses()

        AppState.addEventListener("change", this.onChangeAppState)
    }

    playMusic = () => {
        SoundPlayer.onFinishedLoading(() => {
            this.startedAt = new Date()
        })

        // TODO
        // we need a better way of waiting
        // for the file to load, so we don't
        // desync the music and words
        SoundPlayer.playSoundFile(this.props.music, "mp3")

        if (this.props.onFinished) {
            SoundPlayer.onFinishedPlaying(this.props.onFinished)
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
        if (
            this.state.nowAt &&
            this.startedAt &&
            this.state.nowAt.getSeconds() !== this.startedAt.getSeconds()
        ) {
            return true
        }

        return false
    }

    componentDidUpdate(previousProps) {
        if (previousProps.isPlaying && !this.props.isPlaying) {
            this.stopMusic()
        }

        if (!previousProps.isPlaying && this.props.isPlaying) {
            this.playMusic()
        }

        this.cacheVerses()
    }

    cacheVerses = () => {
        const verses = []
        const limits = []

        Children.forEach(this.props.children, child => {
            if (child.type === Verse || child.type === Title) {
                verses.push(child)
            }
        })

        const { cues } = this.props

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
        if (this.props.isPlaying) {
            this.stopMusic()
        }

        clearTimeout(this.forceUpdateTimer)

        AppState.removeEventListener("change", this.onChangeAppState)
    }

    onChangeAppState = state => {
        if (this.props.isPlaying) {
            if (state === "active") {
                this.onResume()
            } else {
                this.onPause()
            }
        }
    }

    onPause = () => {
        const delta = this.state.nowAt.getTime() - this.startedAt.getTime()
        this.seconds = delta / 1000

        SoundPlayer.pause()
    }

    onResume = () => {
        this.startedAt = moment()
            .subtract(this.seconds, "seconds")
            .toDate()

        this.seconds = undefined

        SoundPlayer.resume()
    }

    processChildren = () => {
        const { verses, limits } = this

        const processed = []

        Children.forEach(this.props.children, (child, key) => {
            if (child.type === Verse || child.type === Title) {
                processed.push(
                    cloneElement(child, {
                        key,
                    }),
                )
            }

            if (child.type === Repeat) {
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
        if (this.props.isAnimating) {
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

        const delta = this.state.nowAt.getTime() - this.startedAt.getTime()
        const seconds = delta / 1000

        const shown = []

        for (let i = 0; i < children.length; i++) {
            if (seconds >= limits[i][0] && seconds < limits[i][1]) {
                shown.push(children[i])
            }
        }

        return shown
    }

    renderCloseButton = () => {
        return (
            <TouchableWithoutFeedback onPress={this.onClose}>
                <CloseButton>
                    <Times width={relativeSize(48)} height={relativeSize(48)} />
                </CloseButton>
            </TouchableWithoutFeedback>
        )
    }
}

export { Track }
