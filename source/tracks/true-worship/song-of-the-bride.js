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

const SongOfTheBride = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_song_of_the_bride"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.SongOfTheBride />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { SongOfTheBride }
