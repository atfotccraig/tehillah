import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const Pure = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:24",
            "00:29",
            "00:39",
            "00:51",
            "01:03",
            "01:15",
            "01:32",
            "01:45",
            "01:51",
            "02:01",
            "02:13",
            "02:25",
            "02:37",
            "02:54",
            "03:06",
            "03:12",
            "03:22",
            "03:34",
            "03:46",
            "03:58",
        ]}
        music="faith_has_a_sound_pure"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.Pure />
        </Title>
        <Verse name="one">
            <Line>I renounce the things</Line>
            <Line>that used to have a hold on me</Line>
            <Line>And I renounce the things</Line>
            <Line>that the world declared</Line>
            <Line>that I should be</Line>
        </Verse>
        <Verse name="three">
            <Line>And so I’m drawing near</Line>
            <Line>to the wonder of your throne</Line>
        </Verse>
        <Verse name="four">
            <Line>With one prayer</Line>
            <Line>with one desire</Line>
            <Line>would you hear my cry</Line>
        </Verse>
        <Verse name="five">
            <Line>Let my life be pure</Line>
            <Line>as I live for your name</Line>
            <Line>Let my life be pure</Line>
            <Line>I’ll never be the same</Line>
        </Verse>
        <Verse name="six">
            <Line>Let my life be pure</Line>
            <Line>as I live for you</Line>
            <Line>Would you let me bring</Line>
            <Line>a pleasing offering</Line>
        </Verse>
        <Repeat name="five" />
        <Repeat name="six" />
        <Verse>
            <Line>I know that there are times</Line>
            <Line>when all I do is make mistakes</Line>
            <Line>And I know that there are times</Line>
            <Line>when you look at me</Line>
            <Line>and your heart breaks</Line>
        </Verse>
        <Verse>
            <Line>But here I stand again</Line>
            <Line>humbled at your throne</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="one" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="five" />
        <Repeat name="six" />
    </Track>
)

export { Pure }
