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

const SpeakToMe = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_speak_to_me"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.SpeakToMe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { SpeakToMe }
