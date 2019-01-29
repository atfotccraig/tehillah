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

const TheChoiceToRejoice = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_the_choice_to_rejoice"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.TheChoiceToRejoice />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TheChoiceToRejoice }
