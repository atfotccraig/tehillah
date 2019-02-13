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

const Halleluyah = props => (
    <Track cues={["00:00", "00:05"]} music="true_worship_halleluyah" {...props}>
        <Title>
            <Labels.TrueWorship.Halleluyah />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Halleluyah }
