import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tsephanyah3 = props => (
    <Track
        cues={[
            "00:00",
            "00:15",
            "00:28",
            "00:40",
            "01:06",
            "01:18",
            "01:31",
            "02:22",
            "02:35",
            "02:47",
            "03:13",
            "03:26",
            "03:38",
            "04:28",
        ]}
        music="humble_offerings_tsephanyah_3"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.Tsephanyah3 />
        </Title>
        <Verse name="one">
            <Line>You’ve turned aside my judgement</Line>
            <Line>You’ve faced my enemy</Line>
            <Line>You rejoice over me with singing</Line>
        </Verse>
        <Verse name="two">
            <Line>You’ve turned aside my judgement</Line>
            <Line>You’ve faced my enemy</Line>
            <Line>You rejoice over me with joy</Line>
        </Verse>
        <Verse name="three">
            <Line>You are mighty, mighty to save</Line>
            <Line>You are silent in your love</Line>
            <Line>You are mighty, mighty to save</Line>
            <Line>I will never be ashamed</Line>
        </Verse>
        <Verse name="four">
            <Line>You’ll settle me forever</Line>
            <Line>You’ll take me for your praise</Line>
            <Line>I will trust in you forever</Line>
        </Verse>
        <Verse name="five">
            <Line>You’ll settle me forever</Line>
            <Line>You’ll take me for your praise</Line>
            <Line>
                I will trust in you <Yahweh />
            </Line>
        </Verse>
        <Verse repeat name="six">
            <Line>You are mighty, mighty to save</Line>
            <Line>You are silent in your love</Line>
            <Line>You are mighty, mighty to save</Line>
            <Line>I will never be ashamed</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Verse>
            <Line>I will never be ashamed</Line>
        </Verse>
    </Track>
)

export { Tsephanyah3 }
