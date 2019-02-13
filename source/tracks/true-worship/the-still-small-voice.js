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

const TheStillSmallVoice = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_the_still_small_voice"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.TheStillSmallVoice />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TheStillSmallVoice }
