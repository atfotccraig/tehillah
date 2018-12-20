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

const EternitySingsOfYou = props => (
    <Track cues={["00:00"]} music="refined_eternity_sings_of_you" {...props}>
        <Title>
            <Labels.Refined.EternitySingsOfYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { EternitySingsOfYou }