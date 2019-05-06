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

const BreatheOnMe = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:34",
            "01:00",
            "01:22",
            "01:51",
            "02:17",
            "02:55",
        ]}
        music="wonderful_maker_breathe_on_me"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.BreatheOnMe />
        </Title>
        <Verse>
            <Line>To know You</Line>
            <Line>the power of Your sacrifice</Line>
            <Line>What a wond’rous gift</Line>
            <Line>Forgiven, invited in Your presence</Line>
            <Line>Unimaginable</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahshua />, oh guardian of my life
            </Line>
            <Line>Salvation, Healer of my soul</Line>
        </Verse>
        <Verse>
            <Line>My hope is in You, it’s in You</Line>
            <Line>Oh revealer of truth</Line>
            <Line>I will follow You</Line>
        </Verse>
        <Verse>
            <Line>All of me is totally inadequate</Line>
            <Line>to reciprocate</Line>
            <Line>My heart sings a love song</Line>
            <Line>unpronounceable</Line>
            <Line>See me dance for joy</Line>
        </Verse>
        <Verse>
            <Line>To be close to You</Line>
            <Line>Your love brings me through</Line>
            <Line>What else would I do?</Line>
            <Line>I am found in You</Line>
        </Verse>
        <Verse repeat>
            <Line>My hope is in You, it’s in You</Line>
            <Line>Oh revealer of truth</Line>
            <Line>I will follow You</Line>
        </Verse>
        <Verse repeat repeatText="x4">
            <Line>Breathe on me</Line>
            <Line>Breathe on me</Line>
            <Line>Breathe on me</Line>
        </Verse>
    </Track>
)

export { BreatheOnMe }
