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

const ISurrender = props => (
    <Track cues={["00:00"]} music="refined_i_surrender" {...props}>
        <Title>
            <Labels.Refined.ISurrender />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ISurrender }
