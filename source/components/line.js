import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { relativeSize, selectCss } from "../helpers"

const Text = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${relativeSize(50)}px;
    line-height: ${relativeSize(75)}px;
    color: #22292f;
`

const RepeatText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif; font-weight: 700;`,
        `font-family: noto_serif_bold;`,
    )};
    font-size: ${relativeSize(30)}px;
    color: #2779bd;
`

const Line = ({ children, repeat, repeatText }) => {
    return (
        <Text>
            {children}
            {repeat && <RepeatText>{" " + repeatText}</RepeatText>}
        </Text>
    )
}

Line.propTypes = {
    repeat: PropTypes.bool,
    repeatText: PropTypes.string,
}

Line.defaultProps = {
    repeat: false,
    repeatText: "x2",
}

export { Line }
