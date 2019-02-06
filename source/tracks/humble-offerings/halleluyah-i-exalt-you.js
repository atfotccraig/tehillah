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

const HalleluyahIExaltYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_halleluyah_i_exalt_you"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HalleluyahIExaltYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HalleluyahIExaltYou }
