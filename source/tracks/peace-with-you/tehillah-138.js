import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah138 = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:35",
            "00:54",
            "01:31",
            "01:50",
            "02:28",
            "02:46",
            "03:41",
        ]}
        music="peace_with_you_tehillah_138"
        {...props}
    >
        <Title>
            <Labels.PeaceWithYou.Tehillah138 />
        </Title>
        <Verse>
            <Line>I give You thanks with all my heart</Line>
            <Line>before the mighty ones</Line>
            <Line>I bow myself before Your throne</Line>
            <Line>and sing my praise to You</Line>
        </Verse>
        <Verse>
            <Line>The day I called You answered me</Line>
            <Line>You made me bold and strengthened me</Line>
            <Line>Let all the rulers of the earth</Line>
            <Line>give thanks for the words of Your mouth</Line>
        </Verse>
        <Verse repeat>
            <Line>
                Let them sing of the ways of <Yahweh />
            </Line>
            <Line>for great is His esteem</Line>
            <Line>Even though He is exalted</Line>
            <Line>He loves the humble heart</Line>
        </Verse>
        <Verse name="one">
            <Line>
                Master <Yahweh />, You are perfect
            </Line>
            <Line>In the midst of distress You revive me</Line>
            <Line>You stretched out Your hand to save me</Line>
            <Line>and in kindness You never forsake me</Line>
        </Verse>
        <Verse repeat>
            <Line>
                I will sing of the ways of <Yahweh />
            </Line>
            <Line>for great is His esteem</Line>
            <Line>Even though He is exalted</Line>
            <Line>He loves the humble heart</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat repeatText="x3">
            <Line>
                I will sing of the ways of <Yahweh />
            </Line>
            <Line>for great is His esteem</Line>
            <Line>Even though He is exalted</Line>
            <Line>He loves the humble heart</Line>
        </Verse>
        <Verse repeat>
            <Line>He loves the humble heart</Line>
        </Verse>
    </Track>
)

export { Tehillah138 }
