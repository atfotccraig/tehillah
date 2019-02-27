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

const RiseUp = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:29",
            "00:42",
            "00:58",
            "01:12",
            "01:28",
            "01:41",
        ]}
        music="true_worship_rise_up"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.RiseUp />
        </Title>
        <Verse repeat name="one">
            <Line>Rise up! Stand up!</Line>
            <Line>Lift your eyes to Elohim</Line>
            <Line>Rise up! Stand up!</Line>
            <Line>Be you not afraid</Line>
        </Verse>
        <Verse>
            <Line>In this world you will face trouble</Line>
            <Line>In this world you will have pain</Line>
            <Line>
                But if your hope is in <Yahshua />
            </Line>
            <Line>you will never be ashamed</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>We can see the mountains trembling</Line>
            <Line>We can feel the valleys quake</Line>
            <Line>As the righteous ones of Elohim</Line>
            <Line>are rising up for His name’s sake</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Darkness cannot overcome His light</Line>
            <Line>In His presence evil flees, but</Line>
            <Line>
                those who trust in <Yahweh />
                ’s mighty name
            </Line>
            <Line>will find salvation on their knees</Line>
        </Verse>
        <Verse repeat repeatText="x6">
            <Line>Rise up! Stand up!</Line>
            <Line>Lift your eyes to Elohim</Line>
            <Line>Rise up! Stand up!</Line>
            <Line>Be you not afraid</Line>
        </Verse>
    </Track>
)

export { RiseUp }
