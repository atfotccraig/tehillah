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

const AllOrNothing = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_all_or_nothing"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.AllOrNothing />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AllOrNothing }
