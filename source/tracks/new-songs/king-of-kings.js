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

const KingOfKings = props => (
    <Track cues={["00:00", "00:05"]} music="new_songs_king_of_kings" {...props}>
        <Title>
            <Labels.NewSongs.KingOfKings />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { KingOfKings }
