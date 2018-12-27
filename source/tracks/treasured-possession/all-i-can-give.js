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

const AllICanGive = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_all_i_can_give"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.AllICanGive />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AllICanGive }
