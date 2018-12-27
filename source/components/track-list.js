import React, { Component, Fragment } from "react"
import { AsyncStorage, Platform, StatusBar } from "react-native"
import PropTypes from "prop-types"
import { IsPlayListContext } from "app/context"
import { BackgroundColor } from "app/colors"
import { Chrome, OrderedList, Random, Safari } from "app/icons"
import { Button } from "./button"
import { ButtonContainer } from "./button-container"
import { TrackListAlbum } from "./track-list-album"
import { TrackListContainer } from "./track-list-container"
import { TrackListTrack } from "./track-list-track"
import Downloads from "app/downloads"
import { AccentColor, NormalLightColor } from "../colors"

class TrackList extends Component {
    static propTypes = {
        onScroll: PropTypes.func.isRequired,
        onRandom: PropTypes.func.isRequired,
        onOpenPlayList: PropTypes.func.isRequired,
        onBrowse: PropTypes.func.isRequired,
        onPlay: PropTypes.func.isRequired,
        showBrowseButton: PropTypes.bool.isRequired,
        tracks: PropTypes.object.isRequired,
        labels: PropTypes.object.isRequired,
    }

    isPlayListAllowed = () => {
        // if we ever want to allow portrait
        // on iPhone or Android devices
        // we'd need this code

        // const { width } = Dimensions.get("window")

        // if (Platform.OS === "android") {
        //     return width > 400
        // }

        // return Platform.isPad

        // in the meantime, only iPad can go portrait
        // and will always have enough screen space
        // so we always allow playlist

        return true
    }

    state = {
        hasDownloadedAny: false,
    }

    constructor(...params) {
        super(...params)

        for (const album in Object.keys(this.props.tracks)) {
            this.state[`hasDownloaded${album}`] = false
        }
    }

    async componentDidMount() {
        const { tracks } = this.props
        const albums = Object.keys(tracks)

        const hasDownloaded = await Promise.all(
            albums.map(album =>
                AsyncStorage.getItem(
                    `has-downloaded-${Downloads[`${album}Name`]}`,
                ),
            ),
        )

        const hasDownloadedAny = hasDownloaded.some(album => album === "yes")

        let state = {
            hasDownloadedAny,
        }

        for (let i = 0; i < albums.length; i++) {
            state = {
                ...state,
                [`hasDownloaded${albums[i]}`]: hasDownloaded[i] === "yes",
            }
        }

        this.setState(state)
    }

    onDownloaded = async album => {
        const name = Downloads[`${album}Name`]

        await AsyncStorage.setItem(`has-downloaded-${name}`, `yes`)

        this.setState({
            [`hasDownloaded${album}`]: true,
        })
    }

    render() {
        const {
            onScroll,
            onRandom,
            onOpenPlayList,
            onBrowse,
            showBrowseButton,
        } = this.props

        const { hasDownloadedAny } = this.state

        return (
            <IsPlayListContext.Consumer>
                {isPlayList => (
                    <Fragment>
                        <TrackListContainer
                            onScroll={onScroll}
                            scrollEventThrottle={250}
                        >
                            <StatusBar
                                barStyle="dark-content"
                                backgroundColor={BackgroundColor}
                            />
                            {this.renderAlbums()}
                        </TrackListContainer>
                        <ButtonContainer>
                            <Button
                                onPress={onRandom}
                                isDisabled={!hasDownloadedAny}
                            >
                                <Random
                                    fill={
                                        hasDownloadedAny
                                            ? AccentColor
                                            : NormalLightColor
                                    }
                                />
                            </Button>
                            {!isPlayList && this.isPlayListAllowed() ? (
                                <Button
                                    onPress={onOpenPlayList}
                                    isDisabled={!hasDownloadedAny}
                                >
                                    <OrderedList
                                        fill={
                                            hasDownloadedAny
                                                ? AccentColor
                                                : NormalLightColor
                                        }
                                    />
                                </Button>
                            ) : null}
                            {showBrowseButton ? (
                                <Button onPress={onBrowse}>
                                    {Platform.select({
                                        ios: <Safari />,
                                        android: <Chrome />,
                                    })}
                                </Button>
                            ) : null}
                        </ButtonContainer>
                    </Fragment>
                )}
            </IsPlayListContext.Consumer>
        )
    }

    renderAlbums = () => {
        const { tracks } = this.props

        return Object.keys(tracks).map(album => this.renderAlbum(album))
    }

    renderAlbum = album => {
        const { labels } = this.props

        const hasDownloaded = this.state[`hasDownloaded${album}`]

        return (
            <Fragment key={album}>
                <TrackListAlbum
                    name={album}
                    label={labels[album].Album}
                    isDownloaded={hasDownloaded}
                    onDownloaded={this.onDownloaded}
                />
                {this.renderTracksForAlbum(album, hasDownloaded)}
            </Fragment>
        )
    }

    renderTracksForAlbum = (album, hasDownloaded) => {
        const { tracks, labels, onPlay } = this.props

        return Object.keys(tracks[album]).map(track => {
            return (
                <TrackListTrack
                    key={album + track}
                    label={labels[album][track]}
                    onPress={() => onPlay(album, track)}
                    isDisabled={!hasDownloaded}
                />
            )
        })
    }
}

export { TrackList }
