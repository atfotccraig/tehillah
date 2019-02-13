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

const KingJosiah = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_king_josiah"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.KingJosiah />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { KingJosiah }
