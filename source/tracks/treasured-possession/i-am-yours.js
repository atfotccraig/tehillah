import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const IAmYours = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:30",
            "00:53",
            "01:19",
            "01:42",
            "02:05",
            "02:31",
        ]}
        music="treasured_possession_i_am_yours"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.IAmYours />
        </Title>
        <Verse name="one">
            <Line>Light my lamp, make my darkness light</Line>
            <Line>Delight yourself in me</Line>
            <Line>Light my lamp, make my darkness light</Line>
            <Line>Oh lover of my soul</Line>
        </Verse>
        <Verse>
            <Line>You have called me by my name, I am yours</Line>
            <Line>Where you go, I go, I am yours</Line>
            <Line>In your presence I find joy, I am yours</Line>
            <Line>I’m the apple of your eye, I am yours</Line>
        </Verse>
        <Verse name="two">
            <Line>When your voice thunders from the heavens</Line>
            <Line>As my heart trembles in hopeful expectation</Line>
            <Line>I know I’ll find shelter in your booth</Line>
            <Line>I will rest in peace</Line>
            <Line>for you are my salvation</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Your eyes are always on me, I am yours</Line>
            <Line>Your hands moulded my heart, I am yours</Line>
            <Line>You understand my ways, I am yours</Line>
            <Line>I stand in awe of you, I am yours</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="one" />
    </Track>
)

export { IAmYours }
