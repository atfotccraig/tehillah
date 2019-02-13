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

const AriseShine = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_arise_shine"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.AriseShine />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AriseShine }
