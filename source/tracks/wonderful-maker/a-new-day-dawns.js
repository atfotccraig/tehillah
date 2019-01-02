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

const ANewDayDawns = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="wonderful_maker_a_new_day_dawns"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.ANewDayDawns />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ANewDayDawns }
