import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const TreeasuredPossession = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_treasured_possession"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.TreeasuredPossession />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TreeasuredPossession }
