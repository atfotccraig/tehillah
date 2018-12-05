import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"

const Text = styled.Text`
    font-family: "Noto Serif";
    font-size: 50px;
`

const RepeatText = styled.Text`
    font-family: "Noto Serif";
    font-size: 30px;
    font-weight: 700;
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
