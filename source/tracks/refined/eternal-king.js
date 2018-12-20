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

const EternalKing = props => (
    <Track cues={["00:00"]} music="refined_eternal_king" {...props}>
        <Title>
            <Labels.Refined.EternalKing />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { EternalKing }
