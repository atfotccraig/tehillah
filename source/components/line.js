import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { relativeSize, selectCss } from "../helpers"
import { NormalColor, NormalLightColor } from "../colors"

const Text = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(48, props.context)}px;
    line-height: ${props => relativeSize(72, props.context)}px;
    color: ${NormalColor};
`

const RepeatText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif; font-weight: 700`,
        `font-family: noto_serif_bold;`,
    )};
    font-size: ${props => relativeSize(30, props.context)}px;
    color: ${NormalLightColor};
`

const Line = ({ children, repeat, repeatText }) => {
    return (
        <SizeContext.Consumer>
            {context => (
                <Text context={context}>
                    {children}
                    {repeat ? (
                        <RepeatText context={context}>
                            {" " + repeatText}
                        </RepeatText>
                    ) : null}
                </Text>
            )}
        </SizeContext.Consumer>
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
