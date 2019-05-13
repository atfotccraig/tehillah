import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const NeverAlone = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:23",
            "00:36",
            "00:48",
            "01:05",
            "01:17",
            "01:34",
            "01:46",
            "01:58",
            "02:09",
            "02:22",
            "02:34",
            "02:50",
            "02:56",
            "03:08",
            "03:19",
            "03:31",
            "03:45",
            "03:57",
            "04:09",
            "04:20",
            "04:32",
            "04:45",
        ]}
        music="living_waters_never_alone"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.NeverAlone />
        </Title>
        <Verse name="one">
            <Line>Because You’re with me</Line>
            <Line>holding me, loving me</Line>
            <Line>You’re with me</Line>
            <Line>I’m never on my own</Line>
        </Verse>
        <Verse name="two">
            <Line>Because You’re with me</Line>
            <Line>holding me, loving me</Line>
            <Line>You’re with me, now</Line>
        </Verse>
        <Verse>
            <Line>You always know me</Line>
            <Line>without asking any questions</Line>
            <Line>You always see me</Line>
            <Line>and You never hide Your face</Line>
        </Verse>
        <Verse>
            <Line>You always hear me</Line>
            <Line>and I know I’m never on my own</Line>
            <Line>I’m never alone</Line>
        </Verse>
        <Verse>
            <Line>My heart is pierced</Line>
            <Line>by the extent of Your affection</Line>
            <Line>I am besieged by all</Line>
            <Line>the love You freely give</Line>
        </Verse>
        <Verse>
            <Line>I feel You near me</Line>
            <Line>and I know I’m never on my own</Line>
            <Line>I’m never alone</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>You are the Saviour</Line>
            <Line>I’ve been waiting for</Line>
            <Line>The One who broke into</Line>
            <Line>the darkness of my life</Line>
        </Verse>
        <Verse>
            <Line>You told me You think</Line>
            <Line>I’m worth fighting for</Line>
            <Line>You rescued me and now</Line>
            <Line>I’m never ever on my own</Line>
        </Verse>
        <Verse>
            <Line>I’m never alone</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>I’m never alone</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>I’m never alone</Line>
        </Verse>
    </Track>
)

export { NeverAlone }
