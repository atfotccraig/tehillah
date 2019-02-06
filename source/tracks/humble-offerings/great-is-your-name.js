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

const GreatIsYourName = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_great_is_your_name"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.GreatIsYourName />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { GreatIsYourName }
