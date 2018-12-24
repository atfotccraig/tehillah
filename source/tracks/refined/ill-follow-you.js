import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const IllFollowYou = props => (
    <Track
        cues={[
            "00:00",
            "00:09",
            "00:31",
            "00:50",
            "01:15",
            "01:30",
            "01:47",
            "02:11",
            "02:26",
            "02:41",
            "03:01",
            "03:20",
            "03:35",
            "03:50",
            "04:05",
            "04:20",
        ]}
        music="refined_ill_follow_you"
        {...props}
    >
        <Title>
            <Labels.Refined.IllFollowYou />
        </Title>
        <Verse name="one">
            <Line>
                Blessed <Yahshua />, this is my confession
            </Line>
            <Line>Me and my house we serve</Line>
            <Line>only you alone</Line>
        </Verse>
        <Verse name="two">
            <Line>Saviour and Redeemer</Line>
            <Line>Being in your presence</Line>
            <Line>is my greatest desire</Line>
        </Verse>
        <Verse name="three">
            <Line>Refine me, remould me</Line>
            <Line>take me as your own</Line>
            <Line>Cleanse me, fill me</Line>
            <Line>until I’m white as snow</Line>
        </Verse>
        <Verse name="five">
            <Line>Oooooh, I’ll follow after you</Line>
        </Verse>
        <Verse name="six">
            <Line>Oooooh, show me all that’s true</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="five" />
    </Track>
)

export { IllFollowYou }
