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

const ThroughYourEyes = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_through_your_eyes"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.ThroughYourEyes />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ThroughYourEyes }
