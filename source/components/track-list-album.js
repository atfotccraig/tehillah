import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import BackgroundDownloader from "react-native-background-downloader"
import FileSystem from "react-native-fs"
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

const AlbumNameIcon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin: 0 4px;
`

class TrackListAlbum extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
            .isRequired,
        isDownloaded: PropTypes.bool,
        onDownloaded: PropTypes.func,
        onDeleted: PropTypes.func,
    }

    static defaultProps = {
        isDownloaded: false,
        onDownloaded: undefined,
        onDeleted: undefined,
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

        this.setState({ isDownloading: true })

        BackgroundDownloader.download({
            id,
            url,
            destination: `${folder}/${file}`,
        })
            .begin(expected => {
                console.log(`filter ${file}: ${expected} bytes`)
            })
            .progress(percent => {
                console.log(`filter ${file}: ${percent * 100}%`)
            })
            .done(async () => {
                console.log(`filter ${file}: complete`)

                try {
                    await unzip(`${folder}/${file}`, folder)
                    console.log(`filter ${file}: unzipped`)
                } catch (e) {
                    console.log(`filter ${file}: ${e.message}`)
                }

                try {
                    await FileSystem.unlink(`${folder}/${file}`)
                    console.log(`filter ${file}: deleted`)
                } catch (e) {
                    console.log(`filter ${file}: ${e.message}`)
                }

                this.setState({
                    isDownloading: false,
                })

                if (onDownloaded) {
                    onDownloaded(name)
                }
            })
            .error(error => {
                this.setState({ isDownloading: false })
                console.log(`filter ${file}: ${error}`)
            })
    }

    onDelete = async () => {
        const { name, onDeleted } = this.props

        const files = Downloads[`${name}Files`]
        const folder = BackgroundDownloader.directories.documents

        for (const i in files) {
            console.log(`filter ${files[i]}: deleting`)

            try {
                await FileSystem.unlink(`${folder}/${files[i]}`)
                console.log(`filter ${files[i]}: deleted`)
            } catch (e) {
                console.log(`filter ${files[i]}: ${e.message}`)
            }
        }

        if (onDeleted) {
            onDeleted(name)
        }
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
                    <AlbumNameIcon>
                        <Button onPress={this.onDelete} thickness={3} size={48}>
                            <Trash width={23.625} height={27} />
                        </Button>
                    </AlbumNameIcon>
                ) : isDownloading ? (
                    <AlbumNameIcon>
                        <HourglassHalf width={18} height={24} />
                    </AlbumNameIcon>
                ) : (
                    <AlbumNameIcon>
                        <Button
                            onPress={this.onDownload}
                            thickness={3}
                            size={48}
                        >
                            <CloudDownload width={27} height={21.6} />
                        </Button>
                    </AlbumNameIcon>
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
