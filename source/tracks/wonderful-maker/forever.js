import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const Forever = props => (
    <Track
        cues={[
            "00:00",
            "00:20",
            "00:42",
            "01:04",
            "01:26",
            "01:49",
            "02:10",
            "02:31",
            "02:53",
        ]}
        music="wonderful_maker_forever"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.Forever />
        </Title>
        <Verse>
            <Line>You changed my life now</Line>
            <Line>I am yours forever</Line>
            <Line>I am amazed by all the love</Line>
            <Line>you have shown</Line>
        </Verse>
        <Verse>
            <Line>All your devotion</Line>
            <Line>was poured out in compassion</Line>
            <Line>How could I not be</Line>
            <Line>overwhelmed by you</Line>
        </Verse>
        <Verse>
            <Line>I am awed, I’m amazed</Line>
            <Line>I don’t know how to say</Line>
            <Line>that you’ve captured my heart</Line>
            <Line>for always</Line>
        </Verse>
        <Verse>
            <Line>You look at me with such</Line>
            <Line>a vast understanding</Line>
            <Line>You see my flaws and yet</Line>
            <Line>you don’t turn away</Line>
        </Verse>
        <Verse>
            <Line>I hope that I could be</Line>
            <Line>your perfect reflection</Line>
            <Line>All of my days I want to</Line>
            <Line>be your delight</Line>
        </Verse>
        <Verse>
            <Line>Let me be, let them see</Line>
            <Line>all that you mean to me</Line>
            <Line>That I’m yours and you’re mine</Line>
            <Line>forever</Line>
        </Verse>
        <Verse>
            <Line>You are all I desire</Line>
            <Line>and my heart is on fire</Line>
            <Line>Come and be my first love</Line>
            <Line>forever</Line>
        </Verse>
        <Verse>
            <Line>I don’t know what to say</Line>
            <Line>but I’ll ask and I’ll pray</Line>
            <Line>that your love shine through me</Line>
            <Line>forever</Line>
        </Verse>
    </Track>
)

export { Forever }
