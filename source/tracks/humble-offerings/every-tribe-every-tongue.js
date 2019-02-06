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

const EveryTribeEveryTongue = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_every_tribe_every_tongue"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.EveryTribeEveryTongue />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { EveryTribeEveryTongue }
