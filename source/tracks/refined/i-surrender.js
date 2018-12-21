import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ISurrender = props => (
    <Track
        cues={[
            "00:00",
            "00:07",
            "00:25",
            "00:45",
            "01:03",
            "01:22",
            "01:38",
            "01:55",
            "02:10",
            "02:26",
        ]}
        music="refined_i_surrender"
        {...props}
    >
        <Title>
            <Labels.Refined.ISurrender />
        </Title>
        <Verse>
            <Line>My fight is gone, I’m all alone</Line>
            <Line>Only you know where I’ve been</Line>
            <Line>I’m on the ground, there’s no way out</Line>
            <Line>Can’t beat this unseen foe</Line>
        </Verse>
        <Verse name="one">
            <Line>I surrender, I surrender</Line>
            <Line>I give it all to you</Line>
            <Line>I surrender, I surrender</Line>
            <Line>my life belongs to you</Line>
        </Verse>
        <Verse>
            <Line>The battle’s been long, but you are strong</Line>
            <Line>I can’t do this on my own</Line>
            <Line>I’ll bend my knees, you set me free</Line>
            <Line>Defeat all my enemies</Line>
        </Verse>
        <Repeat name="one" />
        <Verse name="two">
            <Line>Oh, I have hope</Line>
            <Line>you’ve never let me down</Line>
            <Line>You are my only salvation</Line>
        </Verse>
        <Verse name="three">
            <Line>When my friends let me down</Line>
            <Line>you are always around</Line>
            <Line>You are faithful beyond all measure</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat repeatText="x3">
            <Line>I surrender, I surrender</Line>
            <Line>I give it all to you</Line>
            <Line>I surrender, I surrender</Line>
            <Line>my life belongs to you</Line>
        </Verse>
    </Track>
)

export { ISurrender }
