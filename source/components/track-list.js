import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { AsyncStorage, Platform, StatusBar, Text } from "react-native"
import PropTypes from "prop-types"
import { IsPlayListContext, SizeContext } from "app/context"
import { BackgroundColor } from "app/colors"
import { Chrome, OrderedList, Random, Safari } from "app/icons"
import { relativeSize } from "app/helpers"
import { Button } from "./button"
import { ButtonContainer } from "./button-container"
import { TrackListAlbum } from "./track-list-album"
import { TrackListTrack } from "./track-list-track"
import Downloads from "app/downloads"
import { AccentLightColor, NormalLightColor } from "../colors"

const Container = styled.FlatList.attrs(props => ({
    contentContainerStyle: {
        paddingHorizontal: props.isPlayList
            ? relativeSize(50, props.size)
            : relativeSize(150, props.size),
        paddingVertical: props.isPlayList
            ? relativeSize(100, props.size)
            : relativeSize(150, props.size),
        alignItems: "flex-start",
    },
}))`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${BackgroundColor};
`

class TrackList extends Component {
    static propTypes = {
        onRandom: PropTypes.func.isRequired,
        onOpenPlayList: PropTypes.func.isRequired,
        onBrowse: PropTypes.func.isRequired,
        onPlay: PropTypes.func.isRequired,
        showBrowseButton: PropTypes.bool.isRequired,
        tracks: PropTypes.object.isRequired,
        labels: PropTypes.object.isRequired,
        onDownloadsChanged: PropTypes.func,
    }

    static defaultProps = {
        onDownloadsChanged: undefined,
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
        offset: 0,
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

        const state = {}

        for (let i = 0; i < albums.length; i++) {
            state[`hasDownloaded${albums[i]}`] = hasDownloaded[i] === "yes"
        }

        this.setState(state, () => {
            this.onDownloadsChanged()
        })

        setTimeout(async () => {
            const offset = await AsyncStorage.getItem("track-list-offset")

            this.setState({
                offset: offset ? JSON.parse(offset) : 0,
            })
        }, 750)
    }

    onDownloaded = async album => {
        const name = Downloads[`${album}Name`]

        await AsyncStorage.setItem(`has-downloaded-${name}`, `yes`)

        this.setState(
            {
                [`hasDownloaded${album}`]: true,
            },
            () => {
                this.onDownloadsChanged()
            },
        )
    }

    onDownloadsChanged = () => {
        const { tracks, onDownloadsChanged } = this.props

        const downloads = {}
        const albums = Object.keys(tracks)

        for (let i = 0; i < albums.length; i++) {
            downloads[albums[i]] = this.state[`hasDownloaded${albums[i]}`]
        }

        const hasDownloadedAny = Object.keys(downloads).some(
            album => downloads[album],
        )

        this.setState(
            {
                hasDownloadedAny,
            },
            () => {
                if (onDownloadsChanged) {
                    onDownloadsChanged(downloads, hasDownloadedAny)
                }
            },
        )
    }

    onDeleted = async album => {
        const name = Downloads[`${album}Name`]

        await AsyncStorage.setItem(`has-downloaded-${name}`, `no`)

        this.setState(
            {
                [`hasDownloaded${album}`]: false,
            },
            () => {
                this.onDownloadsChanged()
            },
        )
    }

    onMomentumScrollEnd = async ({ nativeEvent }, isPlayList) => {
        if (isPlayList) {
            return
        }

        await AsyncStorage.setItem(
            "track-list-offset",
            JSON.stringify(nativeEvent.contentOffset.y),
        )
    }

    render() {
        const {
            onRandom,
            onOpenPlayList,
            onBrowse,
            showBrowseButton,
            tracks,
            onMomentumScrollEnd,
            ...rest
        } = this.props

        const { hasDownloadedAny, offset } = this.state

        const items = []
        const albumsNames = Object.keys(tracks)

        for (const i in albumsNames) {
            const albumName = albumsNames[i]
            const trackNames = Object.keys(tracks[albumName])

            items.push({ type: "album", albumName, key: albumName })

            for (const j in trackNames) {
                const trackName = trackNames[j]

                items.push({
                    type: "track",
                    albumName,
                    trackName,
                    key: albumName + trackName,
                })
            }
        }

        return (
            <SizeContext.Consumer>
                {size => (
                    <IsPlayListContext.Consumer>
                        {isPlayList => (
                            <Fragment>
                                <StatusBar
                                    barStyle="dark-content"
                                    backgroundColor={BackgroundColor}
                                />
                                <Container
                                    data={items}
                                    renderItem={this.renderItem}
                                    initialNumToRender={15}
                                    removeClippedSubviews={true}
                                    onMomentumScrollEnd={e => {
                                        this.onMomentumScrollEnd(e, isPlayList)

                                        if (onMomentumScrollEnd) {
                                            onMomentumScrollEnd(e)
                                        }
                                    }}
                                    size={size}
                                    ref={view => {
                                        view &&
                                            view.getScrollResponder &&
                                            view.getScrollResponder().scrollTo({
                                                x: 0,
                                                y: isPlayList ? 0 : offset,
                                            })
                                    }}
                                    isPlayList={isPlayList}
                                    {...rest}
                                />
                                <ButtonContainer>
                                    <Button
                                        onPress={onRandom}
                                        isDisabled={!hasDownloadedAny}
                                    >
                                        <Random
                                            fill={
                                                hasDownloadedAny
                                                    ? AccentLightColor
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
                                                        ? AccentLightColor
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
                )}
            </SizeContext.Consumer>
        )
    }

    renderItem = ({ item: { type, albumName, trackName } }) => {
        const { labels, onPlay } = this.props

        const hasDownloaded = this.state[`hasDownloaded${albumName}`]

        if (type === "album") {
            return (
                <TrackListAlbum
                    name={albumName}
                    label={labels[albumName].Album}
                    isDownloaded={hasDownloaded}
                    onDownloaded={this.onDownloaded}
                    onDeleted={this.onDeleted}
                />
            )
        }

        if (type === "track") {
            return (
                <TrackListTrack
                    label={labels[albumName][trackName]}
                    onPress={() => onPlay(albumName, trackName)}
                    isDisabled={!hasDownloaded}
                />
            )
        }
    }
}

export { TrackList }
