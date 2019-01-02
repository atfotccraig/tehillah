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

const YouTakeMyBreathAway = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_you_take_my_breath_away"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.YouTakeMyBreathAway />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YouTakeMyBreathAway }
