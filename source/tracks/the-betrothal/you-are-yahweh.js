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

const YouAreYahweh = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_you_are_yahweh"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.YouAreYahweh />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { YouAreYahweh }
