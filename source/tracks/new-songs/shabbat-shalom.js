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

const ShabbatShalom = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="new_songs_shabbat_shalom"
        {...props}
    >
        <Title>
            <Labels.NewSongs.ShabbatShalom />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ShabbatShalom }
