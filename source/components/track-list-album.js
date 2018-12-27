import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import BackgroundDownloader from "react-native-background-downloader"
import { unzip } from "react-native-zip-archive"
import { IsPlayListContext, SizeContext } from "app/context"
import { selectCss, relativeSize } from "app/helpers"
import { NormalColor, NormalLightColor } from "app/colors"
import { CloudDownload, HourglassHalf, Trash } from "app/icons"
import Downloads from "app/downloads"
import { Button } from "./button"

const AlbumNameView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-top: ${props => relativeSize(32, props.size)}px;
`

const AlbumNameText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props =>
        props.isPlaylist
            ? relativeSize(32, props.size)
            : relativeSize(40, props.size)}px;
    color: ${NormalColor};
`

const AlbumSizeText = styled(AlbumNameText)`
    font-size: ${props => relativeSize(18, props.size)}px;
    color: ${NormalLightColor};
`

const AlbumNameMeta = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

class TrackListAlbum extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
            .isRequired,
        isDownloaded: PropTypes.bool,
        onDownloaded: PropTypes.func,
    }

    static defaultProps = {
        isDownloaded: false,
        onDownloaded: undefined,
    }

    state = {
        isDownloading: false,
    }

    onDownload = () => {
        const { name, onDownloaded } = this.props

        const folder = BackgroundDownloader.directories.documents

        const id = Downloads[`${name}Name`]
        const url = Downloads[`${name}Uri`]
        const file = `${id}.zip`

        BackgroundDownloader.download({
            id,
            url,
            destination: `${folder}/${file}`,
        })
            .begin(expected => {
                console.log(`${file}: ${expected} bytes`)

                this.setState({ isDownloading: true })
            })
            .progress(percent => {
                console.log(`${file}: ${percent * 100}%`)
            })
            .done(async () => {
                console.log(`${file}: complete`)

                try {
                    await unzip(`${folder}/${file}`, folder)
                } catch (e) {
                    console.log(`${file}: ${e.message}`)
                }

                this.setState({
                    isDownloading: false,
                })

                if (onDownloaded) {
                    onDownloaded(name)
                }
            })
            .error(error => {
                console.log(`${file}: ${error}`)
            })
    }

    render() {
        const { label: LabelComponent } = this.props

        return (
            <SizeContext.Consumer>
                {size => (
                    <IsPlayListContext.Consumer>
                        {isPlaylist => (
                            <AlbumNameView size={size}>
                                <AlbumNameText
                                    size={size}
                                    isPlaylist={isPlaylist}
                                >
                                    <LabelComponent fontSize={30} />
                                </AlbumNameText>
                                {this.renderMeta(size, isPlaylist)}
                            </AlbumNameView>
                        )}
                    </IsPlayListContext.Consumer>
                )}
            </SizeContext.Consumer>
        )
    }

    renderMeta = (size, isPlaylist) => {
        const { name, isDownloaded } = this.props
        const { isDownloading } = this.state

        return (
            <AlbumNameMeta>
                {isDownloaded ? (
                    <Button
                        onPress={() => alert("remove")}
                        thickness={3}
                        size={32}
                    >
                        <Trash width={23.625} height={27} />
                    </Button>
                ) : isDownloading ? (
                    <HourglassHalf width={18} height={24} />
                ) : (
                    <Button onPress={this.onDownload} thickness={3} size={48}>
                        <CloudDownload width={27} height={21.6} />
                    </Button>
                )}
                {!isPlaylist ? (
                    <AlbumSizeText size={size}>
                        {Downloads[`${name}Size`]}
                    </AlbumSizeText>
                ) : null}
            </AlbumNameMeta>
        )
    }
}

export { TrackListAlbum }
