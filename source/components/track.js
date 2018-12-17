import React, { Children, Component, cloneElement } from "react"
import { AppState } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import SoundPlayer from "react-native-sound-player"
import moment from "moment"
import KeepAwake from "react-native-keep-awake"
import Orientation from "react-native-orientation"
import { BackgroundColor } from "../colors"
import { SizeContext } from "../context"
import { seconds } from "../helpers"
import { StepBackward, StepForward, Times } from "../icons"
import { Button } from "./button"
import { Buttons } from "./buttons"
import { Title } from "./title"
import { Repeat } from "./repeat"
import { Verse } from "./verse"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${BackgroundColor};
`

class Track extends Component {
    static contextType = SizeContext

    static propTypes = {
        isAnimating: PropTypes.bool,
        isPlaying: PropTypes.bool,
        showSkip: PropTypes.bool,
        showClose: PropTypes.bool,
        showRestart: PropTypes.bool,
        onPause: PropTypes.func,
        onResume: PropTypes.func,
        onRestart: PropTypes.func,
        onSkip: PropTypes.func,
        onClose: PropTypes.func,
        onFinish: PropTypes.func,
    }

    static defaultProps = {
        isAnimating: false,
        isPlaying: false,
        showSkip: false,
        showClose: true,
        showRestart: true,
        onPause: undefined,
        onResume: undefined,
        onRestart: undefined,
        onSkip: undefined,
        onClose: undefined,
        onFinish: undefined,
    }

    state = {
        nowAt: new Date(),
    }

    onPause = () => {
        const delta = this.state.nowAt.getTime() - this.startedAt.getTime()
        this.seconds = delta / 1000

        SoundPlayer.pause()

        if (this.props.onPause) {
            this.props.onPause()
        }
    }

    onResume = () => {
        this.startedAt = moment()
            .subtract(this.seconds, "seconds")
            .toDate()

        this.seconds = undefined

        SoundPlayer.resume()

        if (this.props.onResume) {
            this.props.onResume()
        }
    }

    onRestart = () => {
        this.stopMusic()
        this.playMusic()
        this.startedAt = new Date()

        if (this.props.onRestart) {
            this.props.onRestart()
        }
    }

    onClose = () => {
        this.stopMusic()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    onSkip = () => {
        this.stopMusic()

        if (this.props.onSkip) {
            this.props.onSkip()
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

        KeepAwake.activate()

        Orientation.addOrientationListener(this.onOrientationChange)
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

        if (this.props.onFinish) {
            SoundPlayer.onFinishedPlaying(this.props.onFinish)
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

        KeepAwake.deactivate()

        Orientation.removeOrientationListener(this.onOrientationChange)
    }

    onOrientationChange = () => {
        this.forceUpdate()
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
        const { width, height } = this.context
        const { showSkip, showClose, showRestart } = this.props

        return (
            <Container>
                {this.props.isAnimating
                    ? this.renderAnimatedChildren()
                    : this.renderStaticChildren()}
                <Buttons fadeBackground={false}>
                    {showClose && (
                        <Button onPress={this.onClose}>
                            <Times width={48} height={48} />
                        </Button>
                    )}
                    {showRestart && (
                        <Button onPress={this.onRestart}>
                            <StepBackward width={42} height={42} />
                        </Button>
                    )}
                    {showSkip && (
                        <Button onPress={this.onSkip}>
                            <StepForward width={42} height={42} />
                        </Button>
                    )}
                </Buttons>
            </Container>
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
}

export { Track }
