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

const Tehillim124 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_tehillim_124"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.Tehillim124 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillim124 }
