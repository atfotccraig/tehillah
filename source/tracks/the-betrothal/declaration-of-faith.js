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

const DeclarationOfFaith = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="the_betrothal_declaration_of_faith"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.DeclarationOfFaith />
        </Title>
        <Verse>
            <Line>Words</Line>
        </Verse>
    </Track>
)

export { DeclarationOfFaith }
