import React, { Component, Children, cloneElement } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"

const Container = styled.View`
    display: flex;
    margin: 20px;
`

class Verse extends Component {
    render() {
        const { children, repeat, repeatText } = this.props
        const count = Children.count(children)

        return (
            <Container>
                {Children.map(children, (child, i) => {
                    const props = {}

                    if (repeat && i === count - 1) {
                        props.repeat = repeat
                        props.repeatText = repeatText
                    }

                    return cloneElement(child, props)
                })}
            </Container>
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
