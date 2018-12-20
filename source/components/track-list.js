import React, { Component, Fragment } from "react"
import { Platform, StatusBar } from "react-native"
import PropTypes from "prop-types"
import { IsPlayListContext } from "app/context"
import { BackgroundColor } from "app/colors"
import { Chrome, OrderedList, Random, Safari } from "app/icons"
import { Button } from "./button"
import { ButtonContainer } from "./button-container"
import { TrackListAlbum } from "./track-list-album"
import { TrackListContainer } from "./track-list-container"
import { TrackListTrack } from "./track-list-track"

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

    render() {
        const {
            onScroll,
            onRandom,
            onOpenPlayList,
            onBrowse,
            showBrowseButton,
        } = this.props

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
                            <Button onPress={onRandom}>
                                <Random />
                            </Button>
                            {!isPlayList && this.isPlayListAllowed() ? (
                                <Button onPress={onOpenPlayList}>
                                    <OrderedList />
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
        const { tracks, labels } = this.props

        return Object.keys(tracks).map(album => (
            <Fragment key={album}>
                <TrackListAlbum label={labels[album].Album} />
                {this.renderTracksForAlbum(album)}
            </Fragment>
        ))
    }

    renderTracksForAlbum = album => {
        const { tracks, labels, onPlay } = this.props

        return Object.keys(tracks[album]).map(track => {
            return (
                <TrackListTrack
                    key={album + track}
                    label={labels[album][track]}
                    onPress={() => onPlay(album, track)}
                />
            )
        })
    }
}

export { TrackList }
