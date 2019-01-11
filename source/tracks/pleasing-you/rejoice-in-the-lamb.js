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

const RejoiceInTheLamb = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_rejoice_in_the_lamb"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.RejoiceInTheLamb />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { RejoiceInTheLamb }
