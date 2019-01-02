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

const YourPresence = props => (
    <Track cues={["00:00", "00:05"]} music="new_songs_your_presence" {...props}>
        <Title>
            <Labels.NewSongs.YourPresence />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YourPresence }
