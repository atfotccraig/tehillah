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

const IAmYours = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_i_am_yours"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.IAmYours />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IAmYours }
