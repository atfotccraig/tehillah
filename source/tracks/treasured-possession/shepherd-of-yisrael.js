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

const ShepherdOfYisrael = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_shepherd_of_yisrael"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.ShepherdOfYisrael />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ShepherdOfYisrael }
