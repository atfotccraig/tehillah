import React, { Component, createElement } from "react"

import {
    I18nManager,
    StatusBar,
    TouchableWithoutFeedback,
    View,
} from "react-native"

import styled from "styled-components/native"
import SplashScreen from "react-native-splash-screen"
import tracks from "./tracks"
import { relativeSize, selectCss } from "./helpers"

I18nManager.allowRTL(false)

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        padding: relativeSize(250),
        alignItems: "flex-start",
    },
}))`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
`

const Text = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${relativeSize(40)}px;
    color: #22292f;
`

const TrackView = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${relativeSize(15)}px;
`

const TrackText = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${relativeSize(30)}px;
    color: #22292f;
`

class App extends Component {
    state = {
        track: undefined,
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        const { track } = this.state

        const children = []

        for (const album in tracks) {
            children.push(
                <View key={album}>
                    <Text>{album.replace(/([A-Z])/g, " $1").trim()}</Text>
                </View>,
            )

            let number = 1

            for (const track in tracks[album]) {
                if (track == "labels") {
                    continue
                }

                let TextComponent = (
                    <TrackText>
                        {number}. {track.replace(/([A-Z0-9]+)/g, " $1").trim()}
                    </TrackText>
                )

                if (tracks[album].labels[track]) {
                    TextComponent = createElement(tracks[album].labels[track], {
                        Wrapper: TrackText,
                        number,
                        size: 40,
                    })
                }

                children.push(
                    <TouchableWithoutFeedback
                        key={album + track}
                        onPress={() => this.setState({ track: [album, track] })}
                    >
                        <TrackView>{TextComponent}</TrackView>
                    </TouchableWithoutFeedback>,
                )

                number++
            }
        }

        if (!track) {
            return (
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#ffffff"
                    />
                    {children}
                </Container>
            )
        }

        const Track = tracks[track[0]][track[1]]

        return (
            <View>
                <StatusBar hidden />
                <Track
                    isAnimating
                    isPlaying
                    onFinished={() => this.setState({ track: undefined })}
                    onClosed={() => this.setState({ track: undefined })}
                />
            </View>
        )
    }
}

export { App }
