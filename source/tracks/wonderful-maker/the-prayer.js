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

const ThePrayer = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_the_prayer"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.ThePrayer />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ThePrayer }
