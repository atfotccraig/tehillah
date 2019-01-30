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

const Tehillim46 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_tehillim_46"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.Tehillim46 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillim46 }