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
        music="the_betrothal_come_have_you_way"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.ComeHaveYourWay />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { ComeHaveYourWay }
