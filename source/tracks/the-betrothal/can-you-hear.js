import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const CanYouHear = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:23",
            "00:31",
            "00:38",
            "00:45",
            "01:17",
            "01:32",
            "01:52",
        ]}
        music="the_betrothal_can_you_hear"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.CanYouHear />
        </Title>
        <Verse name="one">
            <Line>Can you hear the sound</Line>
            <Line>of people calling out?</Line>
            <Line>Can you hear the sound</Line>
            <Line>creation sings aloud?</Line>
        </Verse>
        <Verse name="two">
            <Line>Can you hear the sound</Line>
            <Line>of people shouting halleluyah?</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse name="three" repeat>
            <Line>Sing praises to the Mighty King</Line>
            <Line>Praises, lift your voice and sing</Line>
            <Line>
                Praises to <Yahweh /> who reigns forever
            </Line>
        </Verse>
        <Verse>
            <Line>Push back the darkness</Line>
            <Line>Lift your voice to the sky</Line>
            <Line>Fight the oppression</Line>
            <Line>with your hands lifted high</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>We will not surrender</Line>
            <Line>We will fight forever</Line>
            <Line>We will not surrender at all</Line>
        </Verse>
        <Repeat name="three" />
    </Track>
)

export { CanYouHear }
