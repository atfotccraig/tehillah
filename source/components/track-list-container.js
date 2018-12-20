import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IsPlayListContext, SizeContext } from "app/context"
import { BackgroundColor } from "app/colors"
import { relativeSize } from "app/helpers"

const Container = styled.ScrollView.attrs(props => ({
    contentContainerStyle: {
        paddingHorizontal: props.isPlayList
            ? relativeSize(50, props.size)
            : relativeSize(150, props.size),
        paddingVertical: props.isPlayList
            ? relativeSize(100, props.size)
            : relativeSize(150, props.size),
        alignItems: "flex-start",
    },
}))`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${BackgroundColor};
`

const TrackListContainer = ({ children, onScroll }) => (
    <SizeContext.Consumer>
        {size => (
            <IsPlayListContext.Consumer>
                {isPlayList => (
                    <Container
                        size={size}
                        isPlayList={isPlayList}
                        onScroll={onScroll ? onScroll : _ => null}
                    >
                        {children}
                    </Container>
                )}
            </IsPlayListContext.Consumer>
        )}
    </SizeContext.Consumer>
)

TrackListContainer.propTypes = {
    onScroll: PropTypes.func,
}

TrackListContainer.defaultProps = {
    onScroll: undefined,
}

export { TrackListContainer }
