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

const PraiseAndEsteem = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_praise_and_esteem"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.PraiseAndEsteem />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { PraiseAndEsteem }
