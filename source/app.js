import React, { Component, Fragment } from "react"
import { AsyncStorage, Dimensions, Linking, StatusBar } from "react-native"
import styled from "styled-components/native"
import SplashScreen from "react-native-splash-screen"
import Orientation from "react-native-orientation"
import BackgroundDownloader from "react-native-background-downloader"
import Tracks from "app/tracks"
import Labels from "app/labels"
import { randomItem } from "app/helpers"
import { ButtonIntro, ErrorBoundary, PlayList, TrackList } from "./components"
import { IsPlayListContext, IsRandomContext, SizeContext } from "./context"
import { BackgroundColor } from "./colors"
import Downloads from "./downloads"

const AppContainer = styled.SafeAreaView`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`

const Columns = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${BackgroundColor};
`

const Column = styled.View`
    display: flex;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
`

const LeftColumn = styled(Column)`
    left: 0;
`

const RightColumn = styled(Column)`
    right: 0;
`

const { height, width } = Dimensions.get("window")

const uri = "http://atfotc.com/index.php/music"

class App extends Component {
    state = {
        track: undefined,
        width,
        height,
        showBrowseButton: false,
        hasSeenButtonIntro: false,
        hasSeenScrollIntro: false,
        isPlayList: false,
        playList: [],
        playListPosition: 0,
        trackListScrollPosition: 0,
    }

    async componentDidMount() {
        // DEBUG
        console.log(
            "filter files at:",
            BackgroundDownloader.directories.documents,
        )
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
                this.setState({ showBrowseButton: true })
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
        const { isPlayList, playList, playListPosition, isRandom } = this.state

        if (isPlayList && playListPosition < playList.length) {
            return this.setState({
                track: playList[playListPosition],
                playListPosition: playListPosition + 1,
            })
        }

        if (isRandom) {
            return this.onRandom()
        }

        this.setState({ track: undefined })
    }

    onRandom = async () => {
        const albums = Object.keys(Tracks)

        const downloads = await Promise.all(
            albums.map(album =>
                AsyncStorage.getItem(
                    `has-downloaded-${Downloads[`${album}Name`]}`,
                ),
            ),
        )

        const downloadedAlbums = albums.filter(
            (_, index) => downloads[index] === "yes",
        )

        const album = randomItem(downloadedAlbums)
        const track = randomItem(Object.keys(Tracks[album]))

        return this.setState({
            isPlayList: false,
            isRandom: true,
            track: [album, track],
        })
    }

    onOpenPlayList = () => {
        this.setState({ isPlayList: true })
    }

    onClosePlayList = () => {
        this.setState({ isPlayList: false })
    }

    onLayout = event => {
        const { width, height } = event.nativeEvent.layout

        this.setState({
            width,
            height,
        })
    }

    onMomentumScrollEnd = async e => {
        this.setState({
            hasSeenScrollIntro: true,
            trackListScrollPosition: e.nativeEvent.contentOffset.y,
        })

        await AsyncStorage.setItem("has-seen-scroll-intro", "yes")
    }

    onPlayTrack = (album, track) => {
        return this.setState({ track: [album, track] })
    }

    onQueueTrack = (album, track) => {
        const now = new Date()

        this.setState(state => ({
            playList: [...state.playList, [album, track, now.getTime()]],
        }))
    }

    onDequeueTrack = (album, track, time) => {
        this.setState(state => ({
            playList: state.playList.filter(
                item =>
                    item[0] !== album || item[1] !== track || item[2] !== time,
            ),
        }))
    }

    onPlayPlayList = () => {
        let { playList } = this.state

        if (playList.length > 0) {
            this.setState({
                track: playList[0],
                playListPosition: 1,
            })
        }
    }

    render() {
        const { track, width, height, isPlayList, isRandom } = this.state

        const content = (
            <ErrorBoundary>
                {track ? this.renderTrack() : this.renderTrackList()}
            </ErrorBoundary>
        )

        return (
            <AppContainer onLayout={this.onLayout}>
                <SizeContext.Provider value={{ width, height }}>
                    <IsPlayListContext.Provider value={isPlayList}>
                        <IsRandomContext.Provider value={isRandom}>
                            {content}
                        </IsRandomContext.Provider>
                    </IsPlayListContext.Provider>
                </SizeContext.Provider>
            </AppContainer>
        )
    }

    renderTrackList = () => {
        const {
            isPlayList,
            playList,
            showBrowseButton,
            trackListScrollPosition,
        } = this.state

        const trackList = (
            <TrackList
                tracks={Tracks}
                labels={Labels}
                showBrowseButton={showBrowseButton}
                onBrowse={this.onBrowse}
                onOpenPlayList={this.onOpenPlayList}
                onRandom={this.onRandom}
                onMomentumScrollEnd={this.onMomentumScrollEnd}
                contentOffset={{ x: 0, y: trackListScrollPosition }}
                onPlay={isPlayList ? this.onQueueTrack : this.onPlayTrack}
            />
        )

        return (
            <Fragment>
                {isPlayList ? (
                    <Columns>
                        <LeftColumn>{trackList}</LeftColumn>
                        <RightColumn>
                            <PlayList
                                onClose={this.onClosePlayList}
                                onPlay={this.onPlayPlayList}
                                onDequeue={this.onDequeueTrack}
                                items={playList}
                                labels={Labels}
                            />
                        </RightColumn>
                    </Columns>
                ) : (
                    trackList
                )}
                {this.renderIntros()}
            </Fragment>
        )
    }

    renderIntros = () => {
        const { hasSeenScrollIntro, hasSeenButtonIntro } = this.state

        return (
            <Fragment>
                {/*
                 * don't know how I feel about this
                 * so I'm disabling it for now
                 * {hasSeenScrollIntro ? null : <ScrollIntro />}
                 */}
                {hasSeenButtonIntro ? null : (
                    <ButtonIntro
                        onPress={async () => {
                            this.setState({
                                hasSeenButtonIntro: true,
                            })

                            await AsyncStorage.setItem(
                                "has-seen-button-intro",
                                "yes",
                            )
                        }}
                    />
                )}
            </Fragment>
        )
    }

    renderTrack = () => {
        const { track, isRandom, isPlayList } = this.state
        const TrackComponent = Tracks[track[0]][track[1]]

        if (!TrackComponent) {
            console.log("filter can't find component:", track[0], track[1])
        }

        return (
            <Fragment>
                <StatusBar hidden />
                <TrackComponent
                    isAnimating
                    isPlaying
                    showSkip={isRandom}
                    showRestart={!isPlayList}
                    onFinish={this.onFinish}
                    onClose={this.onClose}
                    onSkip={this.onRandom}
                />
            </Fragment>
        )
    }
}

export { App }
