import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const HalleluyahIExaltYou = props => (
    <Track
        cues={["00:00", "00:23", "00:46", "01:09", "01:32", "01:56", "02:24"]}
        music="humble_offerings_halleluyah_i_exalt_you"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HalleluyahIExaltYou />
        </Title>
        <Verse name="one">
            <Line>Halleluyah, I exalt you</Line>
            <Line>and my heart will stand in wonder</Line>
            <Line>
                Mighty <Yahweh />, come and meet me
            </Line>
            <Line>I am desperate for your presence</Line>
        </Verse>
        <Verse>
            <Line>You are magnificent</Line>
            <Line>My being seeks you</Line>
            <Line>I won’t be satisfied</Line>
            <Line>with any other</Line>
        </Verse>
        <Verse>
            <Line>Turn my heart to your instructions</Line>
            <Line>They will shield me and sustain me</Line>
            <Line>Please accept my humble offering</Line>
            <Line>I am broken, you can heal me</Line>
        </Verse>
        <Verse>
            <Line>You are my hiding place</Line>
            <Line>You are my portion</Line>
            <Line>Your laws have been my songs</Line>
            <Line>in my sojourning</Line>
        </Verse>
        <Verse>
            <Line>Let my heart be pure and perfect</Line>
            <Line>Your compassions they revive me</Line>
            <Line>I will sing of your great wonder</Line>
            <Line>and my lips will pour forth praises</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { HalleluyahIExaltYou }
