import React from "react"

import {
    Hekal,
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const BeSilentBeforeHim = props => (
    <Track
        cues={["00:00", "00:22", "01:03", "01:25", "01:45", "02:07"]}
        music="humble_offerings_be_silent_before_him"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.BeSilentBeforeHim />
        </Title>
        <Verse repeat name="one">
            <Line>
                <Yahweh /> is in His set-apart <Hekal />
            </Line>
            <Line>Let all the earth be silent before Him</Line>
            <Line>His splendour shall cover the heavens</Line>
            <Line>and His praise will fill the earth</Line>
        </Verse>
        <Verse>
            <Line>I bow myself toward you</Line>
            <Line>And give thanks to your name </Line>
            <Line>For though you are exalted</Line>
            <Line>your right hand still saves me</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahweh /> is in His set-apart <Hekal />
            </Line>
            <Line>Let all the earth be silent before Him</Line>
            <Line>His splendour shall cover the heavens</Line>
            <Line>and His praise will fill the earth</Line>
        </Verse>
        <Verse>
            <Line>Though the fig tree withers </Line>
            <Line>and there’s no fruit on the vine</Line>
            <Line>
                Yet I exalt in <Yahweh />
            </Line>
            <Line>In salvation I rejoice</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { BeSilentBeforeHim }
