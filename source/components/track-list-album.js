import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { selectCss, relativeSize } from "../helpers"
import { NormalColor } from "../colors"

const AlbumNameView = styled.View``

const AlbumNameText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(40, props.context)}px;
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
                {context => (
                    <AlbumNameView context={context}>
                        <AlbumNameText context={context}>
                            <LabelComponent fontSize={30} />
                        </AlbumNameText>
                    </AlbumNameView>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { TrackListAlbum }
