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

const Tehillah81 = props => (
    <Track cues={["00:00"]} music="refined_tehillah_81" {...props}>
        <Title>
            <Labels.Refined.Tehillah81 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah81 }
