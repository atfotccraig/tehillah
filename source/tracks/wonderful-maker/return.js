import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const Return = props => (
    <Track cues={["00:00", "00:05"]} music="wonderful_maker_return" {...props}>
        <Title>
            <Labels.WonderfulMaker.Return />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Return }
