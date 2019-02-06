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

const HesAlive = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_hes_alive"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HesAlive />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HesAlive }
