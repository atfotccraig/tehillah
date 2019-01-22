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

const ComeRejoice = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_come_rejoice"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.ComeRejoice />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { ComeRejoice }
