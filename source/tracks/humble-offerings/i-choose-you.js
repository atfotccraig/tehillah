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

const IChooseYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="humble_offerings_i_choose_you"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.IChooseYou />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IChooseYou }
