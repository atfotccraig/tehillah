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

const TheAnswerToMyQuestion = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_the_answer_to_my_question"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.TheAnswerToMyQuestion />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TheAnswerToMyQuestion }
