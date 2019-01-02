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

const IStandInAwe = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_i_stand_in_awe"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.IStandInAwe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IStandInAwe }
