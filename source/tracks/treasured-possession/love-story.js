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

const LoveStory = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_love_story"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.LoveStory />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { LoveStory }
