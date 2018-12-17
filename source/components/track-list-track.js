import React, { Component } from "react"
import styled from "styled-components/native"
import { TouchableWithoutFeedback } from "react-native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { selectCss, relativeSize } from "../helpers"
import { AccentColor } from "../colors"

const TrackNameView = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${props => relativeSize(15, props.context)}px;
`

const TrackNameText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(30, props.context)}px;
    color: ${AccentColor};
`

class TrackListTrack extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
            .isRequired,
    }

    render() {
        const { onPress, label: LabelComponent } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <TouchableWithoutFeedback onPress={onPress}>
                        <TrackNameView context={context}>
                            <TrackNameText context={context}>
                                <LabelComponent fontSize={35} />
                            </TrackNameText>
                        </TrackNameView>
                    </TouchableWithoutFeedback>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { TrackListTrack }
