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

const LetTheKingAlmightyCome = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="true_worship_let_the_king_almighty_come"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.LetTheKingAlmightyCome />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { LetTheKingAlmightyCome }
