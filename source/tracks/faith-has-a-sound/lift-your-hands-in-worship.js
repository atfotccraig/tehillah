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

const LiftYourHandsInWorship = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_lift_your_hands_in_worship"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.LiftYourHandsInWorship />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { LiftYourHandsInWorship }
