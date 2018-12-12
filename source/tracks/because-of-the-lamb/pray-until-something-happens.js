import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const PrayUntilSomethingHappens = props => (
    <Track
        cues={[
            "00:06",
            "00:28",
            "00:41",
            "01:02",
            "01:25",
            "01:47",
            "02:00",
            "02:22",
            "02:45",
            "03:06",
        ]}
        music="because_of_the_lamb_pray_until_something_happens"
        {...props}
    >
        <Verse repeat name="one">
            <Line>Pray until something happens</Line>
            <Line>Don’t ever stop</Line>
            <Line>Pray until you have your answer</Line>
            <Line>Don’t ever give up</Line>
        </Verse>
        <Verse name="two">
            <Line>‘Cause the heavens are filled</Line>
            <Line>with the prayers of the saints</Line>
            <Line>and the angels respond to their power</Line>
            <Line>
                and <Yahweh /> hears the cry
            </Line>
            <Line>from a faith-filled heart</Line>
            <Line>He’ll never let you down</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat name="three">
            <Line>Lift your voice high</Line>
            <Line>to the heavens</Line>
            <Line>He is faithful</Line>
            <Line>He will hear you</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Verse>
            <Line>Pray until something happens</Line>
        </Verse>
    </Track>
)

export { PrayUntilSomethingHappens }
