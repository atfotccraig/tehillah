import React, { Component, Fragment } from "react"
import { Dimensions, StatusBar } from "react-native"
import styled from "styled-components/native"
import SplashScreen from "react-native-splash-screen"
import Orientation from "react-native-orientation"
import tracks from "./tracks"
import labels from "./labels"
import { randomItem, relativeSize } from "./helpers"
import { Button, Buttons, TrackListAlbum, TrackListTrack } from "./components"
import { Random } from "./icons"
import { SizeContext } from "./context"
import { BackgroundColor } from "./colors"

const AppContainer = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`

const TrackContainer = styled.ScrollView.attrs(props => ({
    contentContainerStyle: {
        padding: relativeSize(150, props.context),
        alignItems: "flex-start",
    },
}))`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${BackgroundColor};
`

const { height, width } = Dimensions.get("window")

class App extends Component {
    state = {
        track: undefined,
        width,
        height,
    }

    componentDidMount() {
        Orientation.addOrientationListener(this.onOrientationChange)
        SplashScreen.hide()
    }

    componentWillUnmount() {
        Orientation.removeOrientationListener(this.onOrientationChange)
    }

    onOrientationChange = () => {
        this.forceUpdate()
    }

    onClose = () => {
        this.setState({ isRandom: false, track: undefined })
    }

    onFinish = () => {
        const { isRandom } = this.state

        if (isRandom) {
            this.onRandom()
        } else {
            this.setState({ track: undefined })
        }
    }

    onRandom = () => {
        const album = randomItem(Object.keys(tracks))
        const track = randomItem(Object.keys(tracks[album]))

        return this.setState({ isRandom: true, track: [album, track] })
    }

    onLayout = event => {
        const { width, height } = event.nativeEvent.layout

        this.setState({
            width,
            height,
        })
    }

    render() {
        const { track, width, height } = this.state

        if (!track) {
            return (
                <AppContainer onLayout={this.onLayout}>
                    <SizeContext.Provider value={{ width, height }}>
                        {this.renderTrackList()}
                    </SizeContext.Provider>
                </AppContainer>
            )
        }

        return (
            <AppContainer onLayout={this.onLayout}>
                <SizeContext.Provider value={{ width, height }}>
                    {this.renderTrack()}
                </SizeContext.Provider>
            </AppContainer>
        )
    }

    renderTrackList = () => {
        const { width, height } = this.state

        return (
            <Fragment>
                <TrackContainer context={{ width, height }}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={BackgroundColor}
                    />
                    {this.renderAlbums()}
                </TrackContainer>
                <Buttons>
                    <Button onPress={this.onRandom}>
                        <Random />
                    </Button>
                </Buttons>
            </Fragment>
        )
    }

    renderAlbums = () => {
        return Object.keys(tracks).map(album => (
            <Fragment key={album}>
                <TrackListAlbum label={labels[album].Album} />
                {this.renderTracksForAlbum(album)}
            </Fragment>
        ))
    }

    renderTracksForAlbum = album => {
        return Object.keys(tracks[album]).map(track => (
            <TrackListTrack
                key={album + track}
                label={labels[album][track]}
                onPress={() => this.setState({ track: [album, track] })}
            />
        ))
    }

    renderTrack = () => {
        const { track, isRandom } = this.state
        const TrackComponent = tracks[track[0]][track[1]]

        return (
            <Fragment>
                <StatusBar hidden />
                <TrackComponent
                    isAnimating
                    isPlaying
                    showSkip={isRandom}
                    onFinish={this.onFinish}
                    onClose={this.onClose}
                    onSkip={this.onRandom}
                />
            </Fragment>
        )
    }
}

export { App }
