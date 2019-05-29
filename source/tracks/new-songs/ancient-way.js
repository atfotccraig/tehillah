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

const AncientWay = props => (
    <Track cues={["00:00", "00:05"]} music="new_songs_ancient_way" {...props}>
        <Title>
            <Labels.NewSongs.AncientWay />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AncientWay }
