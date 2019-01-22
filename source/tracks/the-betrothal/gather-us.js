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

const GatherUs = props => (
    <Track cues={["00:00", "00:05"]} music="the_betrothal_gather_us" {...props}>
        <Title>
            <Labels.TheBetrothal.GatherUs />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { GatherUs }
