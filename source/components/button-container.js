import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { IsPlayListContext, SizeContext } from "app/context"
import { relativeSize } from "app/helpers"

const Container = styled.View`
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    height: ${props => relativeSize(96, props.size)}px;
`

const BackgroundContainer = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props =>
        props.isPlayList ? props.size.width / 2 - 10 : props.size.width - 10}px;
    height: ${props => relativeSize(96, props.size)}px;
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

class ButtonContainer extends Component {
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
                {size => (
                    <IsPlayListContext.Consumer>
                        {isPlayList => (
                            <Fragment>
                                {fadeBackground ? (
                                    <BackgroundContainer
                                        size={size}
                                        isPlayList={isPlayList}
                                        pointerEvents={"none"}
                                    >
                                        <BackgroundImage
                                            source={require("../../resources/images/gradient.png")}
                                        />
                                    </BackgroundContainer>
                                ) : null}
                                <Container size={size}>{children}</Container>
                            </Fragment>
                        )}
                    </IsPlayListContext.Consumer>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { ButtonContainer }
