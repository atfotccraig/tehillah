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

const Offering = props => (
    <Track cues={["00:00", "00:05"]} music="pleasing_you_offering" {...props}>
        <Title>
            <Labels.PleasingYou.Offering />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Offering }
