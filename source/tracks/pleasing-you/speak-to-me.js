import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const SpeakToMe = props => (
    <Track
        cues={[
            "00:00",
            "00:26",
            "01:13",
            "01:31",
            "01:42",
            "02:06",
            "02:18",
            "02:35",
        ]}
        music="pleasing_you_speak_to_me"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.SpeakToMe />
        </Title>
        <Verse repeat name="one">
            <Line>Speak to me, I’m listening</Line>
            <Line>Speak to me, I’m waiting here for you</Line>
            <Line>Speak to me, I’m listening</Line>
            <Line>I want to know you as you are</Line>
        </Verse>
        <Verse>
            <Line>Sometimes life can get me down</Line>
            <Line>Sometimes all I hear</Line>
            <Line>is silence all around</Line>
            <Line>
                So <Yahweh /> break down all my walls
            </Line>
        </Verse>
        <Verse>
            <Line>Cause when you speak my name</Line>
            <Line>I want to hear the call</Line>
            <Line>hear the call</Line>
        </Verse>
        <Verse>
            <Line>Speak to me, I’m listening</Line>
            <Line>Speak to me, I’m waiting here for you</Line>
            <Line>Speak to me, I’m listening</Line>
            <Line>I want to know you as you are</Line>
        </Verse>
        <Verse>
            <Line>Your word was once so far away</Line>
            <Line>I didn’t know your truth</Line>
            <Line>or hear the words you say</Line>
        </Verse>
        <Verse>
            <Line>But now your grace</Line>
            <Line>has brought it near</Line>
            <Line>You opened up my eyes</Line>
            <Line>and gave me ears to hear</Line>
            <Line>ears to hear</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { SpeakToMe }
