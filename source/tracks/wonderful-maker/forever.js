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

const Forever = props => (
    <Track cues={["00:00", "00:05"]} music="wonderful_maker_forever" {...props}>
        <Title>
            <Labels.WonderfulMaker.Forever />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Forever }
