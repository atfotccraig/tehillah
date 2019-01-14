import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const WaitingHere = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:38",
            "00:57",
            "01:37",
            "01:55",
            "02:14",
            "02:55",
        ]}
        music="pleasing_you_waiting_here"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.WaitingHere />
        </Title>
        <Verse name="one">
            <Line>I’m breathing in the fear of you</Line>
            <Line>My heart is changed, my life renewed</Line>
            <Line>I’m breathing in the fear of you</Line>
            <Line>Everything I am I give to you</Line>
        </Verse>
        <Verse name="two">
            <Line>I’m walking in the light of you</Line>
            <Line>Your word, the lamp</Line>
            <Line>has shown me truth</Line>
            <Line>￼￼I’m walking in the light of you</Line>
            <Line>Everyday my feet will follow you</Line>
        </Verse>
        <Verse name="three" repeat>
            <Line>I am standing in the hope of you</Line>
            <Line>and no matter what I won’t be moved</Line>
            <Line>I am standing in the hope of you</Line>
            <Line>
                <Yahweh /> I am waiting here for you
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>
                <Yahweh /> I am waiting here for you
            </Line>
        </Verse>
    </Track>
)

export { WaitingHere }
