import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { SizeContext } from "app/context"
import { relativeSize, selectCss } from "app/helpers"
import { NormalColor } from "app/colors"
import { ErrorBoundary } from "./error-boundary"

const Text = styled.Text`
    ${selectCss(
        `font-family: Noto Serif;`,
        `font-family: noto_serif_regular;`,
    )};
    font-size: ${props => relativeSize(45, props.context)}px;
    line-height: ${props => relativeSize(70, props.context)}px;
    color: ${NormalColor};
`

const RepeatText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif; font-weight: 500;`,
        `font-family: noto_serif_semi_bold;`,
    )};
    font-size: ${props => relativeSize(24, props.context)}px;
    color: ${NormalColor};
`

const Line = ({ children, repeat, repeatText }) => {
    return (
        <SizeContext.Consumer>
            {context => (
                <ErrorBoundary>
                    <Text context={context}>
                        {children}
                        {repeat ? (
                            <RepeatText context={context}>
                                {" " + repeatText}
                            </RepeatText>
                        ) : null}
                    </Text>
                </ErrorBoundary>
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
