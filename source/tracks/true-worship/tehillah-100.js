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

const Tehillah100 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_tehillah_100"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.Tehillah100 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah100 }
