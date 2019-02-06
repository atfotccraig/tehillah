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

const Tehillim149 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_tehillim_149"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.Tehillim149 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillim149 }
