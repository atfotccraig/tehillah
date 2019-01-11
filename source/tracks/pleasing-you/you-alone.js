import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const YouAlone = props => (
    <Track cues={["00:00", "00:05"]} music="pleasing_you_you_alone" {...props}>
        <Title>
            <Labels.PleasingYou.YouAlone />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YouAlone }
