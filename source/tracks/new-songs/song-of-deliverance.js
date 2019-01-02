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

const SongOfDeliverance = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="new_songs_song_of_deliverance"
        {...props}
    >
        <Title>
            <Labels.NewSongs.SongOfDeliverance />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { SongOfDeliverance }
