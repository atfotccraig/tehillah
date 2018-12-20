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

const SetMeFree = props => (
    <Track cues={["00:00"]} music="refined_set_me_free" {...props}>
        <Title>
            <Labels.Refined.SetMeFree />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { SetMeFree }
