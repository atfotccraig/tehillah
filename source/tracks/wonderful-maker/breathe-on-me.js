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

const BreatheOnMe = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_breathe_on_me"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.BreatheOnMe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { BreatheOnMe }
