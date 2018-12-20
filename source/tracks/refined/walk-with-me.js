import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const WalkWithMe = props => (
    <Track cues={["00:00"]} music="refined_walk_with_me" {...props}>
        <Title>
            <Labels.Refined.WalkWithMe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WalkWithMe }
