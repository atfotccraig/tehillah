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

const YouGaveAll = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_you_gave_all"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.YouGaveAll />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YouGaveAll }
