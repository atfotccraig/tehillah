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

const WhatWillYouSay = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_what_will_you_say"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.WhatWillYouSay />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhatWillYouSay }
