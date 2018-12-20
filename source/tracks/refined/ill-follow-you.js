import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const IllFollowYou = props => (
    <Track cues={["00:00"]} music="refined_ill_follow_you" {...props}>
        <Title>
            <Labels.Refined.IllFollowYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IllFollowYou }
