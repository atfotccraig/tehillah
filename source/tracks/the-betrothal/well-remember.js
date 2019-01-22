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

const WellRemember = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_well_remember"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.WellRemember />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { WellRemember }
