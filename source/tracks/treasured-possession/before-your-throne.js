import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const BeforeYourThrone = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_before_your_throne"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.BeforeYourThrone />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { BeforeYourThrone }
