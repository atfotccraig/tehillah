import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "../../components"

const ComeYahshuaCome = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_come_yahshua_come"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>
            Come <Yahshua /> Come
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ComeYahshuaCome }
