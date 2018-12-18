import React, { Component } from "react"
import styled from "styled-components/native"
import { Animated, Easing, TouchableWithoutFeedback } from "react-native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { selectCss, relativeSize } from "../helpers"
import { AccentColor, AccentLightColor } from "../colors"

const TrackNameView = styled.View`
    display: flex;
    flex-direction: row;
    padding-top: ${props => relativeSize(16, props.context)}px;
    padding-left: ${props => relativeSize(16, props.context)}px;
    padding-bottom: ${props => relativeSize(4, props.context)}px;
    margin-bottom: ${props => relativeSize(4, props.context)}px;
`

const TrackNameText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(32, props.context)}px;
    line-height: ${props => relativeSize(48, props.context)}px;
    color: ${AccentColor};
`

const TrackPressView = styled(Animated.View)`
    display: flex;
    position: absolute;
    bottom: 0;
    left: ${props => relativeSize(16, props.context)}px;
    height: ${props => relativeSize(4, props.context)}px;
    width: 4px;
    background-color: ${AccentLightColor};
`

class TrackListTrack extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
            .isRequired,
    }

    state = {
        width: undefined,
        animated: new Animated.Value(0),
    }

    onPressIn = context => {
        const { animated, width } = this.state
        const { onPress } = this.props

        if (width) {
            this.animation = Animated.timing(animated, {
                duration: 650,
                easing: Easing.in,
                toValue: width - relativeSize(16, context),
            })

            this.animation.start(({ finished }) => {
                if (finished) {
                    onPress()
                }
            })
        }
    }

    onPressOut = () => {
        const { animated } = this.state

        this.animation.stop()

        this.animation = Animated.timing(animated, {
            duration: 0,
            easing: Easing.in,
            toValue: 0,
        })

        this.animation.start()
    }

    onLayout = event => {
        const { width } = event.nativeEvent.layout
        this.setState({ width })
    }

    render() {
        const { animated } = this.state
        const { label: LabelComponent } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <TouchableWithoutFeedback
                        onPressIn={() => this.onPressIn(context)}
                        onPressOut={() => this.onPressOut()}
                        onLayout={this.onLayout}
                    >
                        <TrackNameView context={context}>
                            <TrackPressView
                                context={context}
                                style={{
                                    width: animated,
                                }}
                            />
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
