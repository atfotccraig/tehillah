import React, { Component, Children, cloneElement } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { SizeContext } from "../context"
import { relativeSize } from "../helpers"

const Container = styled.View`
    display: flex;
    margin: ${props => relativeSize(16, props.context)}px;
`

class Verse extends Component {
    render() {
        const count = Children.count(this.props.children)

        return (
            <SizeContext.Consumer>
                {context => (
                    <Container context={context}>
                        {Children.map(this.props.children, (child, i) => {
                            if (this.props.repeat && i === count - 1) {
                                return cloneElement(child, {
                                    repeat: this.props.repeat,
                                    repeatText: this.props.repeatText,
                                })
                            }

                            return child
                        })}
                    </Container>
                )}
            </SizeContext.Consumer>
        )
    }
}

Verse.propTypes = {
    repeat: PropTypes.bool,
    repeatText: PropTypes.string,
    name: PropTypes.string,
}

Verse.defaultProps = {
    repeat: false,
    repeatText: "x2",
    name: undefined,
}

export { Verse }
