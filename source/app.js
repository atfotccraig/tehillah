import React, { Component, Fragment } from "react"
import { AsyncStorage, Dimensions, Linking, StatusBar } from "react-native"
import styled from "styled-components/native"
import SplashScreen from "react-native-splash-screen"
import Orientation from "react-native-orientation"
import tracks from "./tracks"
import labels from "./labels"
import { randomItem, relativeSize } from "./helpers"

import {
    ButtonIntro,
    Button,
    Buttons,
    ScrollIntro,
    TrackListAlbum,
    TrackListTrack,
} from "./components"

import { Cloud, Random } from "./icons"
import { SizeContext } from "./context"
import { BackgroundColor } from "./colors"

const AppContainer = styled.SafeAreaView`
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

const uri = "http://atfotc.com"

class App extends Component {
    state = {
        track: undefined,
        width,
        height,
        showLink: false,
        hasSeenButtonIntro: false,
        hasSeenScrollIntro: false,
    }

    async componentDidMount() {
        // DEBUG
        // await AsyncStorage.setItem("has-seen-button-intro", "no")
        // await AsyncStorage.setItem("has-seen-scroll-intro", "no")

        const hasSeenButtonIntro = await AsyncStorage.getItem(
            "has-seen-button-intro",
        )

        const hasSeenScrollIntro = await AsyncStorage.getItem(
            "has-seen-scroll-intro",
        )

        this.setState({
            hasSeenButtonIntro: hasSeenButtonIntro === "yes",
            hasSeenScrollIntro: hasSeenScrollIntro === "yes",
        })

        Orientation.addOrientationListener(this.onOrientationChange)

        try {
            if (await Linking.canOpenURL(uri)) {
                this.setState({ showLink: true })
            }
        } catch (e) {
            // can't really do anything about this...
        }

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

    onBrowse = () => {
        Linking.openURL(uri)
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
        const {
            track,
            width,
            height,
            hasSeenButtonIntro,
            hasSeenScrollIntro,
        } = this.state

        if (!track) {
            return (
                <AppContainer onLayout={this.onLayout}>
                    <SizeContext.Provider value={{ width, height }}>
                        {this.renderTrackList()}
                        {hasSeenScrollIntro ? null : <ScrollIntro />}
                        {hasSeenButtonIntro ? null : (
                            <ButtonIntro
                                onPress={async () => {
                                    this.setState({ hasSeenButtonIntro: true })

                                    await AsyncStorage.setItem(
                                        "has-seen-button-intro",
                                        "yes",
                                    )
                                }}
                            />
                        )}
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
        const { width, height, showLink } = this.state

        return (
            <Fragment>
                <TrackContainer
                    context={{ width, height }}
                    onScroll={async () => {
                        this.setState({ hasSeenScrollIntro: true })

                        await AsyncStorage.setItem(
                            "has-seen-scroll-intro",
                            "yes",
                        )
                    }}
                    scrollEventThrottle={250}
                >
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
                    {showLink ? (
                        <Button onPress={this.onBrowse}>
                            <Cloud />
                        </Button>
                    ) : null}
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
