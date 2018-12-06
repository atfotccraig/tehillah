import React, { Component } from "react"
import styled from "styled-components/native"
import { StatusBar, TouchableWithoutFeedback, View } from "react-native"
import tracks from "./tracks"

const Container = styled.ScrollView`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 100px;
`

const Text = styled.Text`
    font-family: "Noto Serif";
    font-size: 40px;
`

const TrackView = styled.View`
    padding: 10px;
`

const TrackText = styled.Text`
    font-family: "Noto Serif";
    font-size: 30px;
`

class App extends Component {
    state = {
        track: undefined,
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
                children.push(
                    <TouchableWithoutFeedback
                        key={album + track}
                        onPress={() => this.setState({ track: [album, track] })}
                    >
                        <TrackView>
                            <TrackText>
                                {number}. {track.replace(/([A-Z])/g, " $1").trim()}
                            </TrackText>
                        </TrackView>
                    </TouchableWithoutFeedback>,
                )

                number++
            }
        }

        if (!track) {
            return (
                <Container>
                    <StatusBar />
                    {children}
                </Container>
            )
        }

        const Track = tracks[track[0]][track[1]]

        return (
            <View>
                <StatusBar hidden />
                <Track isAnimating isPlaying onFinished={() => this.setState({ track: undefined })} />
            </View>
        )
    }
}

export { App }
