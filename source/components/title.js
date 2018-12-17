import React, { Component } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { joinWithOxford, relativeSize, selectCss } from "../helpers"

const Container = styled.View`
    display: flex;
    margin: ${relativeSize(20)}px;
`

const Name = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${relativeSize(50)}px;
    line-height: ${relativeSize(75)}px;
    color: #22292f;
    text-align: center;
`

const Contributors = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${relativeSize(30)}px;
    line-height: ${relativeSize(45)}px;
    color: #22292f;
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
            <Container>
                <Name>{children}</Name>
                {contributors && (
                    <Contributors>{joinWithOxford(contributors)}</Contributors>
                )}
            </Container>
        )
    }
}

export { Title }
