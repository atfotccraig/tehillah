import React, { Children, Component, cloneElement } from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { seconds } from "../helpers"

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const ScrollContainer = styled.ScrollView`
    display: flex;
    width: 100%;
    height: 100%;
`

class Track extends Component {
    static propTypes = {
        isAnimating: PropTypes.bool,
        isPlaying: PropTypes.bool,
    }

    static defaultProps = {
        isAnimating: false,
        isPlaying: false,
    }

    state = {
        isPlaying: false,
        ticks: 0,
    }

    static getDerivedStateFromProps({ isPlaying }) {
        return {
            isPlaying,
            ticks: isPlaying ? 0 : undefined,
        }
    }

    componentDidUpdate(_, { isPlaying }) {
        if (isPlaying) {
            if (!this.startedAt) {
                this.startedAt = new Date()
            }
        } else {
            this.startedAt = undefined
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { isPlaying } = this.state

            if (isPlaying) {
                this.setState(state => ({
                    ticks: state.ticks + 1,
                }))
            }
        }, 250)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    verseFromRepeatOf = (target, verses) => {
        const matching = verses.filter(verse => {
            return verse.props.children[0].props.children === target.props.children
        })

        if (matching.length !== 1) {
            console.error("no single verse found matching repeat")
        }

        return matching[0]
    }

    renderStaticChildren = () => {
        const { children } = this.props

        const verses = []
        const processed = []

        Children.forEach(children, (child, i) => {
            const props = {
                key: i,
            }

            if (child.type.name === "Verse") {
                processed.push(cloneElement(child, props))
                verses.push(child)
            }

            if (child.type.name === "Repeat") {
                const verse = this.verseFromRepeatOf(child, verses)
                processed.push(cloneElement(verse, props))
            }
        })

        return processed
    }

    renderAnimatedChildren = () => {
        const { cues } = this.props

        const processed = this.renderStaticChildren()
        const limits = []

        for (let i = 0; i < cues.length; i++) {
            if (i < cues.length - 1) {
                limits.push([seconds(cues[i]), seconds(cues[i + 1])])
            } else {
                limits.push([seconds(cues[i]), 9999]) // make this dynamic for the track...
            }
        }

        const now = new Date()
        const then = this.startedAt || new Date()
        const diff = (now.getTime() - then.getTime()) / 1000

        const shown = []

        for (let i = 0; i < processed.length; i++) {
            if (diff >= limits[i][0] && diff < limits[i][1]) {
                shown.push(cloneElement(processed[i]))
            }
        }

        return shown
    }

    render() {
        const { isAnimating } = this.props

        if (isAnimating) {
            return <Container>{this.renderAnimatedChildren()}</Container>
        }

        return <ScrollContainer>{this.renderStaticChildren()}</ScrollContainer>
    }
}

export { Track }
