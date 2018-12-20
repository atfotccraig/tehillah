import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { IsPlayListContext, SizeContext } from "app/context"
import { Play, Times } from "app/icons"
import { AccentLightColor, NormalLightColor } from "app/colors"
import { Button } from "./button"
import { ButtonContainer } from "./button-container"
import { TrackListAlbum } from "./track-list-album"
import { TrackListContainer } from "./track-list-container"
import { TrackListTrack } from "./track-list-track"

class PlayList extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        onPlay: PropTypes.func.isRequired,
        onDequeue: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        labels: PropTypes.object.isRequired,
    }

    render() {
        const { onClose, onPlay, onDequeue, items, labels } = this.props

        return (
            <SizeContext.Consumer>
                {size => (
                    <IsPlayListContext.Consumer>
                        {isPlayList => (
                            <Fragment>
                                <TrackListContainer
                                    size={size}
                                    isPlaylist={isPlayList}
                                >
                                    <TrackListAlbum label={() => "Playlist"} />
                                    {items.map(([album, track, time]) => (
                                        <TrackListTrack
                                            key={album + track + time}
                                            label={labels[album][track]}
                                            onPress={() =>
                                                onDequeue(album, track, time)
                                            }
                                        />
                                    ))}
                                </TrackListContainer>
                                <ButtonContainer isPlaylist>
                                    <Button onPress={onClose}>
                                        <Times />
                                    </Button>
                                    <Button
                                        onPress={onPlay}
                                        isDisabled={items.length < 1}
                                    >
                                        <Play
                                            fill={
                                                items.length > 0
                                                    ? AccentLightColor
                                                    : NormalLightColor
                                            }
                                        />
                                    </Button>
                                </ButtonContainer>
                            </Fragment>
                        )}
                    </IsPlayListContext.Consumer>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { PlayList }
