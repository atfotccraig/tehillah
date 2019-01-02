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

const TillTheMastersReturn = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_till_the_masters_return"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.TillTheMastersReturn />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TillTheMastersReturn }
