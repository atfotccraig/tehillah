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

const IAdoreYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_i_adore_you"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.IAdoreYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IAdoreYou }
