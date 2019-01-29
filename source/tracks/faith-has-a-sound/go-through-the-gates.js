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

const GoThroughTheGates = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_go_through_the_gates"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.GoThroughTheGates />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { GoThroughTheGates }
