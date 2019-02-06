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

const ComeHaveYourWay = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_come_have_your_way"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.ComeHaveYourWay />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ComeHaveYourWay }
