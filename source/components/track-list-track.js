import React, { Component } from "react"
import styled from "styled-components/native"
import { Animated, Easing, TouchableWithoutFeedback } from "react-native"
import PropTypes from "prop-types"
import { IsPlayListContext, SizeContext } from "app/context"
import { selectCss, relativeSize } from "app/helpers"
import { AccentColor, AccentLightColor } from "app/colors"

const TrackNameView = styled.View`
    display: flex;
    flex-direction: row;
    padding-top: ${props => relativeSize(16, props.size)}px;
    padding-bottom: ${props => relativeSize(4, props.size)}px;
    margin-bottom: ${props => relativeSize(4, props.size)}px;
`

const TrackNameText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props =>
        props.isPlaylist
            ? relativeSize(24, props.size)
            : relativeSize(32, props.size)}px;
    line-height: ${props =>
        props.isPlaylist
            ? relativeSize(32, props.size)
            : relativeSize(48, props.size)}px;
    color: ${AccentColor};
`

const TrackPressView = styled(Animated.View)`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${props => relativeSize(4, props.size)}px;
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

    onPressIn = size => {
        const { animated, width } = this.state
        const { onPress } = this.props

        if (width) {
            this.animation = Animated.timing(animated, {
                duration: 400,
                easing: Easing.in,
                toValue: width,
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
                {size => (
                    <IsPlayListContext.Consumer>
                        {isPlaylist => (
                            <TouchableWithoutFeedback
                                onPressIn={() => this.onPressIn(size)}
                                onPressOut={() => this.onPressOut()}
                                onLayout={this.onLayout}
                            >
                                <TrackNameView size={size}>
                                    <TrackPressView
                                        size={size}
                                        style={{
                                            width: animated,
                                        }}
                                    />
                                    <TrackNameText
                                        size={size}
                                        isPlaylist={isPlaylist}
                                    >
                                        <LabelComponent
                                            fontSize={isPlaylist ? 28 : 36}
                                        />
                                    </TrackNameText>
                                </TrackNameView>
                            </TouchableWithoutFeedback>
                        )}
                    </IsPlayListContext.Consumer>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { TrackListTrack }
