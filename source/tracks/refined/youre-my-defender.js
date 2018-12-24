import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YoureMyDefender = props => (
    <Track
        cues={[
            "00:00",
            "00:27",
            "00:50",
            "01:16",
            "01:29",
            "01:41",
            "01:53",
            "02:10",
            "03:23",
            "03:35",
            "03:48",
            "03:59",
            "04:14",
        ]}
        music="refined_youre_my_defender"
        {...props}
    >
        <Title>
            <Labels.Refined.YoureMyDefender />
        </Title>
        <Verse>
            <Line>In the shadows</Line>
            <Line>my heart cries to you</Line>
            <Line>Surrounded by evil</Line>
            <Line>attacked without cause</Line>
        </Verse>
        <Verse>
            <Line>In my distress and my sorrow</Line>
            <Line>I call upon you</Line>
            <Line>My help is in you, Yah</Line>
            <Line>my eyes are on you</Line>
        </Verse>
        <Verse name="one">
            <Line>You alone are my defender</Line>
            <Line>and you shield me from harm</Line>
            <Line>I take refuge in you</Line>
            <Line>for you are my only hope</Line>
        </Verse>
        <Verse name="two">
            <Line>When the waves crash all around me</Line>
            <Line>you speak to the storm</Line>
            <Line>You’re my hiding place</Line>
            <Line>and oh I trust in you alone</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>You are my defender</Line>
            <Line>and you shield me from harm</Line>
            <Line>I take refuge in you</Line>
            <Line>for you are my only hope</Line>
        </Verse>
        <Repeat name="two" />
        <Verse />
    </Track>
)

export { YoureMyDefender }
