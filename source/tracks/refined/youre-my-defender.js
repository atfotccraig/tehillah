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

const YoureMyDefender = props => (
    <Track cues={["00:00"]} music="refined_youre_my_defender" {...props}>
        <Title>
            <Labels.Refined.YoureMyDefender />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YoureMyDefender }
