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

const PleasingYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_pleasing_you"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.PleasingYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { PleasingYou }
