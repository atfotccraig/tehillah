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

const Tehillah92 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_tehillah_92"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.Tehillah92 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah92 }
