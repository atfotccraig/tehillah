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

const BeSilentBeforeHim = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_be_silent_before_him"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.BeSilentBeforeHim />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { BeSilentBeforeHim }
