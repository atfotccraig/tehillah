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
            <Line>I was lost and You have found me</Line>
            <Line>I was seeking and You showed me</Line>
            <Line>I was stumbling, You are stable</Line>
            <Line>I took chances, You embraced me</Line>
        </Verse>
        <Verse name="one">
            <Line>Stand in awe of You</Line>
            <Line>Stand in awe</Line>
            <Line>And I stand in awe of You</Line>
            <Line>Stand in awe</Line>
        </Verse>
        <Verse>
            <Line>My heart’s willing, You’re the potter</Line>
            <Line>Purify me, mould this vessel</Line>
            <Line>I submit myself to Your hand</Line>
            <Line>To Your will I bring surrender</Line>
        </Verse>
        <Verse name="two">
            <Line>Bow in worship</Line>
            <Line>yes I bow in worship</Line>
            <Line>Oh I bow in worship</Line>
            <Line>yes I bow in worship</Line>
        </Verse>
        <Verse>
            <Line>I will sing of all Your wonders</Line>
            <Line>I’ll proclaim Your great compassion</Line>
            <Line>I rejoice and I exalt You</Line>
            <Line>You pour out Your truth in my heart</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Stand in awe of You</Line>
            <Line>Stand in awe</Line>
            <Line>And I stand in awe of You</Line>
            <Line>Stand in awe of You</Line>
        </Verse>
    </Track>
)

export { IStandInAwe }
