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

const Tsephanyah3 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_tsephanyah_3"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.Tsephanyah3 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tsephanyah3 }
