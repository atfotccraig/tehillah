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

const MyOneDesire = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_my_one_desire"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.MyOneDesire />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { MyOneDesire }
