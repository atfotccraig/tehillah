import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { SizeContext } from "../context"
import { relativeSize } from "../helpers"

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    height: ${props => relativeSize(96, props.context)}px;
`

const BackgroundContainer = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.context.width - 10}px;
    height: ${props => relativeSize(96, props.context)}px;
`

const BackgroundImage = styled.Image`
    display: flex;
    resize-mode: stretch;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

class Buttons extends Component {
    static propTypes = {
        fadeBackground: PropTypes.bool,
    }

    static defaultProps = {
        fadeBackground: true,
    }

    render() {
        const { fadeBackground, children } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Fragment>
                        {fadeBackground && (
                            <BackgroundContainer
                                context={context}
                                pointerEvents={"none"}
                            >
                                <BackgroundImage
                                    source={require("../../resources/images/gradient.png")}
                                />
                            </BackgroundContainer>
                        )}
                        <ButtonContainer context={context}>
                            {children}
                        </ButtonContainer>
                    </Fragment>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Buttons }
