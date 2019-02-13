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

const OurComingKing = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_our_coming_king"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.OurComingKing />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { OurComingKing }
