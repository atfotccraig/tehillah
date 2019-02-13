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

const TheVoiceOfYahweh = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_the_voice_of_yahweh"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.TheVoiceOfYahweh />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TheVoiceOfYahweh }
