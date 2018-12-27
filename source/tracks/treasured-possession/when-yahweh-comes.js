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

const WhenYahwehComes = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_when_yahweh_comes"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.WhenYahwehComes />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhenYahwehComes }
