import React, { Component, Children, cloneElement } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"

const Container = styled.View`
    display: flex;
    margin: 20px;
`

class Verse extends Component {
    render() {
        const count = Children.count(this.props.children)

        return (
            <Container>
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
