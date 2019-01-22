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

const CanYouHear = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_can_you_hear"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.CanYouHear />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { CanYouHear }
