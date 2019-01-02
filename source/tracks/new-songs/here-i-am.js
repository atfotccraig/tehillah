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

const HereIAm = props => (
    <Track cues={["00:00", "00:05"]} music="new_songs_here_i_am" {...props}>
        <Title>
            <Labels.NewSongs.HereIAm />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HereIAm }
