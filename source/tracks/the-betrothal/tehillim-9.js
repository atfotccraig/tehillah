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

const Tehillim9 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_tehillim_9"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.Tehillim9 />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { Tehillim9 }
