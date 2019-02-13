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

const MyDeliverance = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_my_deliverance"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.MyDeliverance />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { MyDeliverance }
