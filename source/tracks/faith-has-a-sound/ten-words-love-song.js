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

const TenWordsLoveSong = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="faith_has_a_sound_ten_words_love_song"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.TenWordsLoveSong />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TenWordsLoveSong }
