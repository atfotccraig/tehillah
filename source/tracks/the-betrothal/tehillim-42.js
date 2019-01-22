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

const Tehillim42 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_tehillim_42"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.Tehillim42 />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { Tehillim42 }
