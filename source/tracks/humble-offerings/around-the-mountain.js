import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const AroundTheMountain = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:24",
            "00:35",
            "00:47",
            "00:59",
            "01:10",
            "01:22",
            "01:34",
            "01:45",
            "01:57",
            "02:08",
            "02:20",
            "02:31",
            "02:43",
            "02:49",
        ]}
        music="humble_offerings_around_the_mountain"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.AroundTheMountain />
        </Title>
        <Verse>
            <Line>I’ve been around this mountain</Line>
            <Line>so many times before</Line>
            <Line>Asking the same question</Line>
            <Line>What am I living for?</Line>
        </Verse>
        <Verse>
            <Line>The road of life has brought me</Line>
            <Line>to where I am right now</Line>
            <Line>Sometimes high and sometimes low</Line>
            <Line>but other times I just don’t know</Line>
        </Verse>
        <Verse>
            <Line>‘Cause the questions don’t have answers</Line>
            <Line>No who’s or how’s or why’s</Line>
            <Line>And every day I’m searching</Line>
            <Line>for the truth amid the lies</Line>
        </Verse>
        <Verse name="one">
            <Line>And every time</Line>
            <Line>you meet me in the wilderness</Line>
            <Line>And every time, you pick me up</Line>
            <Line>and speak into my heart</Line>
        </Verse>
        <Verse name="two">
            <Line>And every time</Line>
            <Line>you tell me that you love me</Line>
            <Line>And in that moment I know I am free</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Standing at a crossroads</Line>
            <Line>two paths before my face</Line>
            <Line>Asking for directions</Line>
            <Line>so I’ll walk in your grace</Line>
        </Verse>
        <Verse>
            <Line>Often-times before this</Line>
            <Line>I’ve had to make a choice</Line>
            <Line>Then I never listened</Line>
            <Line>never stopped to hear your voice</Line>
        </Verse>
        <Verse>
            <Line>But every time</Line>
            <Line>you meet me in the wilderness</Line>
            <Line>And every time, you pick me up</Line>
            <Line>and speak into my heart</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>And in that moment</Line>
            <Line>I know I am free</Line>
        </Verse>
        <Verse>
            <Line>And in that moment</Line>
            <Line>I’m forever changed</Line>
        </Verse>
    </Track>
)

export { AroundTheMountain }
