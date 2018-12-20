import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { IsPlayListContext, SizeContext } from "app/context"
import { selectCss, relativeSize } from "app/helpers"
import { NormalColor } from "app/colors"

const AlbumNameView = styled.View`
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

class TrackListAlbum extends Component {
    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
            .isRequired,
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
                            </AlbumNameView>
                        )}
                    </IsPlayListContext.Consumer>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { TrackListAlbum }
