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

const YouStillLoveMe = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_you_still_love_me"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.YouStillLoveMe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YouStillLoveMe }
