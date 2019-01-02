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

const HoldNothingBack = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_hold_nothing_back"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.HoldNothingBack />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HoldNothingBack }
