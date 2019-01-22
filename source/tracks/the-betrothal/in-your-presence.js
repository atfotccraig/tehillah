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

const InYourPresence = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_in_your_presence"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.InYourPresence />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { InYourPresence }
