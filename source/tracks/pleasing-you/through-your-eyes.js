import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ThroughYourEyes = props => (
    <Track
        cues={[
            "00:00",
            "00:25",
            "00:48",
            "01:11",
            "01:34",
            "01:57",
            "02:20",
            "03:05",
        ]}
        music="pleasing_you_through_your_eyes"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.ThroughYourEyes />
        </Title>
        <Verse>
            <Line>When the world is stripped away</Line>
            <Line>and all that’s left is me</Line>
            <Line>and I see myself</Line>
            <Line>through Your eyes</Line>
        </Verse>
        <Verse>
            <Line>Then I wonder how it is</Line>
            <Line>that I came to be</Line>
            <Line>so complete in Your eyes</Line>
        </Verse>
        <Verse>
            <Line>Because You saw me in my blood</Line>
            <Line>and in my blood said “Live”</Line>
            <Line>And then You washed me in Your flood</Line>
            <Line>I realised You forgive</Line>
        </Verse>
        <Verse>
            <Line>Now I know You see the blood</Line>
            <Line>that You spilled for me</Line>
            <Line>when You look in my eyes</Line>
        </Verse>
        <Verse>
            <Line>Will You open up my eyes</Line>
            <Line>that I always see</Line>
            <Line>what You see through Your eyes?</Line>
        </Verse>
        <Verse repeat>
            <Line>Because You saw me in my blood</Line>
            <Line>and in my blood said “Live”</Line>
            <Line>And then You washed me in your flood</Line>
            <Line>I realised You forgive</Line>
        </Verse>
        <Verse>
            <Line>Let me live now everyday</Line>
            <Line>in the sacrifice</Line>
            <Line>that makes me whole in Your eyes</Line>
        </Verse>
    </Track>
)

export { ThroughYourEyes }
