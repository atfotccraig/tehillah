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

const CountTheCost = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_count_the_cost"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.CountTheCost />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { CountTheCost }
