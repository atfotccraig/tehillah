import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const WaitingHere = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_waiting_here"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.WaitingHere />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WaitingHere }
