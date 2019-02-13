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

const RiseUp = props => (
    <Track cues={["00:00", "00:05"]} music="true_worship_rise_up" {...props}>
        <Title>
            <Labels.TrueWorship.RiseUp />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { RiseUp }
