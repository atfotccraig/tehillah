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

const WaitingForYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_waiting_for_you"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.WaitingForYou />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { WaitingForYou }
