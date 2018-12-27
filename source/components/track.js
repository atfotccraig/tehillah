import React, { Children, Component, cloneElement } from "react"
import { AppState } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import SoundPlayer from "react-native-sound-player"
import BackgroundDownloader from "react-native-background-downloader"
import moment from "moment"
import KeepAwake from "react-native-keep-awake"
import { seconds, selectCss } from "app/helpers"
import { Pause, Play, StepBackward, StepForward, Times } from "app/icons"
import { NormalColor } from "app/colors"
import { Button } from "./button"
import { ButtonContainer } from "./button-container"
import { Title } from "./title"
import { Repeat } from "./repeat"
import { Verse } from "./verse"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const DebugTimerView = styled.View`
    position: absolute;
    top: 32px;
    right: 32px;
`

const DebugTimerText = styled.Text`
    ${selectCss(
        `font-family: Patrick Hand;`,
        `font-family: patrick_hand_regular;`,
    )};
    color: ${NormalColor}
    font-size: 60px;
`

class Track extends Component {
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
        isPaused: false,
    }

    onPause = () => {
        const delta = this.state.nowAt.getTime() - this.startedAt.getTime()
        this.seconds = delta / 1000

        SoundPlayer.pause()

        this.setState({
            isPaused: true,
        })

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

        this.setState({
            isPaused: false,
        })

        if (this.props.onResume) {
            this.props.onResume()
        }
    }

    onRestart = () => {
        this.stopMusic()
        this.playMusic()

        this.startedAt = new Date()

        this.setState({
            isPaused: false,
        })

        if (this.props.onRestart) {
            this.props.onRestart()
        }
    }

    onClose = () => {
        this.stopMusic()

        this.setState({
            isPaused: false,
        })

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    onSkip = () => {
        this.stopMusic()

        this.setState({
            isPaused: false,
        })

        if (this.props.onSkip) {
            this.props.onSkip()
        }
    }

    componentDidMount() {
        if (this.props.isPlaying) {
            this.playMusic()
        }

        this.forceUpdateTimer = setInterval(() => {
            if (this.props.isPlaying && !this.state.isPaused) {
                this.setState({ nowAt: new Date() })
            }
        }, 250)

        this.cacheVerses()
        AppState.addEventListener("change", this.onChangeAppState)
        KeepAwake.activate()
    }

    playMusic = () => {
        SoundPlayer.onFinishedLoading(() => {
            this.startedAt = new Date()
        })

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
        const { showSkip, showClose, showRestart } = this.props
        const { isPaused } = this.state

        const delta = this.startedAt
            ? (this.state.nowAt.getTime() - this.startedAt.getTime()) / 1000
            : 0

        return (
            <Container>
                {this.props.isAnimating
                    ? this.renderAnimatedChildren()
                    : this.renderStaticChildren()}
                {__DEV__ ? (
                    <DebugTimerView>
                        <DebugTimerText>
                            {Math.floor(delta / 60)
                                .toString()
                                .padStart(2, "0")}
                            :
                            {Math.floor(delta % 60)
                                .toString()
                                .padStart(2, "0")}
                        </DebugTimerText>
                    </DebugTimerView>
                ) : null}
                <ButtonContainer fadeBackground={false}>
                    {showClose ? (
                        <Button onPress={this.onClose}>
                            <Times />
                        </Button>
                    ) : null}
                    {showRestart ? (
                        <Button onPress={this.onRestart}>
                            <StepBackward />
                        </Button>
                    ) : null}
                    {isPaused ? (
                        <Button onPress={this.onResume}>
                            <Play />
                        </Button>
                    ) : (
                        <Button onPress={this.onPause}>
                            <Pause />
                        </Button>
                    )}
                    {showSkip ? (
                        <Button onPress={this.onSkip}>
                            <StepForward />
                        </Button>
                    ) : null}
                </ButtonContainer>
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
