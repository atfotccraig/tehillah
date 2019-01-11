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

const IAmLoved = props => (
    <Track cues={["00:00", "00:05"]} music="pleasing_you_i_am_loved" {...props}>
        <Title>
            <Labels.PleasingYou.IAmLoved />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IAmLoved }
