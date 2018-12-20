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

const HowWouldItBe = props => (
    <Track
        cues={[
            "00:00",
            "00:10",
            "00:32",
            "00:52",
            "01:14",
            "01:35",
            "01:56",
            "02:17",
            "02:38",
            "02:59",
            "03:19",
        ]}
        music="refined_how_would_it_be"
        {...props}
    >
        <Title>
            <Labels.Refined.HowWouldItBe />
        </Title>
        <Verse>
            <Line>Should the pot ask the potter to answer?</Line>
            <Line>Can man’s eyes view the world at a glance?</Line>
            <Line>If it is in our own power to save us</Line>
            <Line>then maybe we should just give it a chance</Line>
        </Verse>
        <Verse name="one">
            <Line>How would it look, how would it look</Line>
            <Line>if we all just obeyed you?</Line>
            <Line>How would it be, how would it be</Line>
            <Line>if we all did what you asked?</Line>
        </Verse>
        <Verse>
            <Line>If we have laid the earth in its foundations</Line>
            <Line>and told the waters “thus far and no more”</Line>
            <Line>Can we take hold of the ends of the earth</Line>
            <Line>then count the clouds</Line>
            <Line>and command it to rain?</Line>
        </Verse>
        <Repeat name="one" />
        <Verse name="two">
            <Line>Teach us what we do not see</Line>
            <Line>What you purposed will always stand</Line>
            <Line>Your laws are for our own good</Line>
            <Line>It’s how we love you and our fellow man</Line>
        </Verse>
        <Verse>
            <Line>There is nothing we can give you</Line>
            <Line>that you didn’t give us first</Line>
            <Line>It is not for man who walks this earth</Line>
            <Line>to direct his own steps</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { HowWouldItBe }
