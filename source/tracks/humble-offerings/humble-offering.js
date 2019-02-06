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

const HumbleOffering = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_humble_offering"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HumbleOffering />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HumbleOffering }
