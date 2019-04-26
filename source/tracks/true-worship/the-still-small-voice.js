import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const TheStillSmallVoice = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:24",
            "00:38",
            "01:01",
            "01:13",
            "01:25",
            "01:36",
            "01:48",
            "01:59",
            "02:13",
        ]}
        music="true_worship_the_still_small_voice"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.TheStillSmallVoice />
        </Title>
        <Verse>
            <Line>Elijah ran away into the wilderness so far</Line>
            <Line>And there Your {"Ruaḥ"} met with him</Line>
            <Line>You always know just where we are</Line>
        </Verse>
        <Verse>
            <Line>He found a cave and went inside</Line>
            <Line>and hid himself away</Line>
            <Line>And then he heard Your voice</Line>
            <Line>begin to speak aloud and say</Line>
        </Verse>
        <Verse repeat>
            <Line>What are you doing here?</Line>
            <Line>You have nothing to fear!</Line>
        </Verse>
        <Verse>
            <Line>And then the mountain it was shaken</Line>
            <Line>by a great and mighty wind</Line>
            <Line>But You were not in the wind</Line>
        </Verse>
        <Verse>
            <Line>And then the earth it shook</Line>
            <Line>the ground did quake</Line>
            <Line>But You were not in the quake</Line>
        </Verse>
        <Verse>
            <Line>And then a raging fire burned</Line>
            <Line>with flames reaching high</Line>
            <Line>But You were not in the fire</Line>
        </Verse>
        <Verse>
            <Line>But in the whisper</Line>
            <Line>the still small voice</Line>
            <Line>there You are to be found</Line>
        </Verse>
        <Verse>
            <Line>And in the whisper</Line>
            <Line>You speak my name</Line>
            <Line>and it’s a beautiful sound</Line>
        </Verse>
        <Verse>
            <Line>So like Elijah went and acted</Line>
            <Line>on the words he heard You speak</Line>
            <Line>I will go, I will live</Line>
            <Line>and Your presence I will seek</Line>
        </Verse>
        <Verse repeat>
            <Line>Hide me now in the cleft of the rock</Line>
            <Line>where the still, small voice can come to me</Line>
            <Line>Hide me now, in the cleft of the rock</Line>
            <Line>and give me eyes so I can see</Line>
        </Verse>
    </Track>
)

export { TheStillSmallVoice }
