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

const Hoshianah = props => (
    <Track cues={["00:00", "00:05"]} music="new_songs_hoshianah" {...props}>
        <Title>
            <Labels.NewSongs.Hoshianah />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Hoshianah }
