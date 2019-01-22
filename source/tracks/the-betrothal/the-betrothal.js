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

const TheBetrothal = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_the_betrothal"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.TheBetrothal />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { TheBetrothal }
