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

const Refuge = props => (
    <Track cues={["00:00", "00:05"]} music="true_worship_refuge" {...props}>
        <Title>
            <Labels.TrueWorship.Refuge />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Refuge }
