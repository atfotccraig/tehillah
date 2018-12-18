import React, { Component } from "react"
import { Easing, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { SizeContext } from "../context"
import { relativeSize } from "../helpers"
import { AccentLightColor } from "../colors"

const Container = styled.View`
    display: flex;
    width: ${props => relativeSize(64, props.context)}px;
    height: ${props => relativeSize(64, props.context)}px;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
`

const CircleContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
`

class Button extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
    }

    state = {
        showProgress: false,
    }

    onPressIn = () => {
        this.setState({
            showProgress: true,
        })
    }

    onPressOut = () => {
        this.setState({
            showProgress: false,
        })
    }

    onAnimationComplete = () => {
        const { onPress } = this.props
        const { showProgress } = this.state

        if (showProgress) {
            onPress()
        }
    }

    render() {
        const { children } = this.props
        const { showProgress } = this.state

        return (
            <SizeContext.Consumer>
                {context => (
                    <TouchableWithoutFeedback
                        onPressIn={this.onPressIn}
                        onPressOut={this.onPressOut}
                    >
                        <Container context={context}>
                            <CircleContainer>
                                {showProgress ? (
                                    <AnimatedCircularProgress
                                        size={relativeSize(64, context)}
                                        width={relativeSize(4, context)}
                                        fill={100}
                                        tintColor={AccentLightColor}
                                        duration={650}
                                        onAnimationComplete={
                                            this.onAnimationComplete
                                        }
                                        easing={Easing.in}
                                    />
                                ) : null}
                            </CircleContainer>
                            {children}
                        </Container>
                    </TouchableWithoutFeedback>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Button }
