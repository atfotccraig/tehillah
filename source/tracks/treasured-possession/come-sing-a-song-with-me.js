import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const ComeSingASongWithMe = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="treasured_possession_come_sing_a_song_with_me"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.ComeSingASongWithMe />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ComeSingASongWithMe }
