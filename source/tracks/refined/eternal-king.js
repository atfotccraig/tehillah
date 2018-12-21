import React from "react"

import {
    Immanuel,
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const EternalKing = props => (
    <Track
        cues={[
            "00:00",
            "00:06",
            "00:24",
            "00:43",
            "01:03",
            "01:25",
            "01:44",
            "02:03",
            "02:23",
        ]}
        music="refined_eternal_king"
        {...props}
    >
        <Title>
            <Labels.Refined.EternalKing />
        </Title>
        <Verse name="one">
            <Line>
                <Yahshua />, Messiah
            </Line>
            <Line>who is, and was, and is to come</Line>
            <Line>Blessed be your name, Eternal King</Line>
        </Verse>
        <Verse name="two">
            <Line>Beginning, and the end</Line>
            <Line>The first, the last, the living one</Line>
            <Line>Blessed be your name, Eternal King</Line>
        </Verse>
        <Verse name="three">
            <Line>Coming on the clouds</Line>
            <Line>with the hosts of heaven</Line>
            <Line>Set-apart are you!</Line>
            <Line>Wonder, Counsellor, Everlasting Father</Line>
            <Line>
                <Immanuel /> our king
            </Line>
        </Verse>
        <Verse>
            <Line>Unchanging, everlasting</Line>
            <Line>perfector of all things</Line>
            <Line>Eternal life is in you</Line>
            <Line>I bow before your throne</Line>
            <Line>and worship you alone</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat>
            <Line>Unchanging, everlasting</Line>
            <Line>perfector of all things</Line>
            <Line>Eternal life is in you</Line>
            <Line>I bow before your throne</Line>
            <Line>and worship you alone</Line>
        </Verse>
    </Track>
)

export { EternalKing }
