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

const WhateverIs = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_whatever_is"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.WhateverIs />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhateverIs }
