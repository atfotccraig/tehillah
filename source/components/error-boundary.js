import React, { Component } from "react"
import styled from "styled-components"

const ErrorView = styled.View`
    background: pink;
    padding: 8px;
`

const ErrorText = styled.Text`
    color: red;
`

class ErrorBoundary extends Component {
    state = { hasError: false, error: undefined }

    componentDidCatch(error) {
        this.setState({ hasError: true, error })
    }

    render() {
        const { hasError, error } = this.state

        if (this.state.hasError) {
            return (
                <ErrorView>
                    <ErrorText>Something went wrong: {info}</ErrorText>
                </ErrorView>
            )
        }

        return this.props.children
    }
}

export { ErrorBoundary }
