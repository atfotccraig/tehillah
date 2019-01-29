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

const MyPrayer = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_my_prayer"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.MyPrayer />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { MyPrayer }
