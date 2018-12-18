import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { joinWithOxford, relativeSize, selectCss } from "../helpers"
import { NormalColor, NormalLightColor } from "../colors"

const Container = styled.View`
    display: flex;
    margin: ${props => relativeSize(20, props.context)}px;
`

const Name = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(48, props.context)}px;
    line-height: ${props => relativeSize(72, props.context)}px;
    color: ${NormalColor};
    text-align: center;
`

const Contributors = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(32, props.context)}px;
    line-height: ${props => relativeSize(48, props.context)}px;
    color: ${NormalLightColor};
    text-align: center;
`

class Title extends Component {
    static propTypes = {
        contributors: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps = {
        contributors: undefined,
    }

    render() {
        const { contributors, children } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Container context={context}>
                        <Name context={context}>{children}</Name>
                        {contributors ? (
                            <Contributors context={context}>
                                {joinWithOxford(contributors)}
                            </Contributors>
                        ) : null}
                    </Container>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Title }
