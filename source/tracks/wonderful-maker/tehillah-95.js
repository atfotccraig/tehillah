import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const Tehillah95 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_tehillah_95"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.Tehillah95 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah95 }
