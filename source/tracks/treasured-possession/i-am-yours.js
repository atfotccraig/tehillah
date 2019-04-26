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
            <Line>Delight Yourself in me</Line>
            <Line>Light my lamp, make my darkness light</Line>
            <Line>Oh lover of my soul</Line>
        </Verse>
        <Verse>
            <Line>You have called me by my name, I am Yours</Line>
            <Line>Where You go, I go, I am Yours</Line>
            <Line>In Your presence I find joy, I am Yours</Line>
            <Line>I’m the apple of Your eye, I am Yours</Line>
        </Verse>
        <Verse name="two">
            <Line>When Your voice thunders from the heavens</Line>
            <Line>As my heart trembles in hopeful expectation</Line>
            <Line>I know I’ll find shelter in Your booth</Line>
            <Line>I will rest in peace</Line>
            <Line>for You are my salvation</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Your eyes are always on me, I am Yours</Line>
            <Line>Your hands moulded my heart, I am Yours</Line>
            <Line>You understand my ways, I am Yours</Line>
            <Line>I stand in awe of You, I am Yours</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="one" />
    </Track>
)

export { IAmYours }
