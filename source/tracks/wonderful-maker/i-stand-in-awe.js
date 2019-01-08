import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const IStandInAwe = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:43",
            "01:05",
            "01:28",
            "01:49",
            "02:12",
            "02:33",
            "02:55",
        ]}
        music="wonderful_maker_i_stand_in_awe"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.IStandInAwe />
        </Title>
        <Verse>
            <Line>I was lost and you have found me</Line>
            <Line>I was seeking and you showed me</Line>
            <Line>I was stumbling, you are stable</Line>
            <Line>I took chances, you embraced me</Line>
        </Verse>
        <Verse name="one">
            <Line>Stand in awe of you</Line>
            <Line>Stand in awe</Line>
            <Line>And I stand in awe of you</Line>
            <Line>Stand in awe</Line>
        </Verse>
        <Verse>
            <Line>My heart’s willing, you’re the potter</Line>
            <Line>Purify me, mould this vessel</Line>
            <Line>I submit myself to your hand</Line>
            <Line>To your will I bring surrender</Line>
        </Verse>
        <Verse name="two">
            <Line>Bow in worship</Line>
            <Line>yes I bow in worship</Line>
            <Line>Oh I bow in worship</Line>
            <Line>yes I bow in worship</Line>
        </Verse>
        <Verse>
            <Line>I will sing of all your wonders</Line>
            <Line>I’ll proclaim your great compassion</Line>
            <Line>I rejoice and I exalt you</Line>
            <Line>You pour out your truth in my heart</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Stand in awe of you</Line>
            <Line>Stand in awe</Line>
            <Line>And I stand in awe of you</Line>
            <Line>Stand in awe of you</Line>
        </Verse>
    </Track>
)

export { IStandInAwe }
