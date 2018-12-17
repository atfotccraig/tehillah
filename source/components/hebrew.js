import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BackgroundColor } from "../colors"
import { SizeContext } from "../context"
import { relativeSize, selectCss } from "../helpers"

const InvisibleText = styled.Text`
    color: ${BackgroundColor};
    font-size: 0px;
`

const HebrewText = styled.Text`
    ${selectCss(
        `font-family: Noto Serif Hebrew; font-weight: 700;`,
        `font-family: noto_serif_hebrew_bold;`,
    )};
    font-size: ${props => relativeSize(props.fontSize, props.context)}px;
`

class Hebrew extends Component {
    static propTypes = {
        fontSize: PropTypes.number,
    }

    static defaultProps = {
        fontSize: 55,
    }

    render() {
        const { fontSize, children } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Fragment>
                        <InvisibleText>l</InvisibleText>
                        <HebrewText fontSize={fontSize} context={context}>
                            {children}
                        </HebrewText>
                    </Fragment>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Hebrew }
