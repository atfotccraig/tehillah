import React, { Component } from "react"
import { Easing, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { SizeContext } from "app/context"
import { relativeSize } from "app/helpers"
import { AccentLightColor } from "app/colors"

const Container = styled.View`
    display: flex;
    width: ${props => relativeSize(props.buttonSize, props.size)}px;
    height: ${props => relativeSize(props.buttonSize, props.size)}px;
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
        isDisabled: PropTypes.bool,
        size: PropTypes.number,
        thickness: PropTypes.number,
    }

    static defaultProps = {
        isDisabled: false,
        size: 64,
        thickness: 4,
    }

    state = {
        showProgress: false,
    }

    onPressIn = () => {
        const { isDisabled } = this.props

        if (!isDisabled) {
            this.setState({
                showProgress: true,
            })
        }
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
        const {
            children,
            size: buttonSize,
            thickness: buttonThickness,
        } = this.props
        const { showProgress } = this.state

        return (
            <SizeContext.Consumer>
                {size => (
                    <TouchableWithoutFeedback
                        onPressIn={this.onPressIn}
                        onPressOut={this.onPressOut}
                    >
                        <Container size={size} buttonSize={buttonSize}>
                            <CircleContainer>
                                {showProgress ? (
                                    <AnimatedCircularProgress
                                        size={relativeSize(buttonSize, size)}
                                        width={relativeSize(
                                            buttonThickness,
                                            size,
                                        )}
                                        fill={100}
                                        tintColor={AccentLightColor}
                                        duration={450}
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
