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

const WonderfulMaker = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_wonderful_maker"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.WonderfulMaker />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WonderfulMaker }
