import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const BlessedAreYou = props => (
    <Track
        cues={[
            "00:00",
            "00:20",
            "00:54",
            "01:04",
            "01:08",
            "01:20",
            "01:25",
            "02:00",
            "02:10",
            "02:15",
            "02:27",
        ]}
        music="because_of_the_lamb_blessed_are_you"
        {...props}
    >
        <Title>Blessed Are You</Title>
        <Verse repeat>
            <Line>
                Blessed are you <Yahweh />
            </Line>
            <Line>King of the universe</Line>
            <Line>Who brings forth bread from the earth</Line>
            <Line>Who brings forth bread from the earth</Line>
        </Verse>
        <Verse repeat repeatText="x5" name="one">
            <Line>Blessed are you</Line>
        </Verse>
        <Verse name="two">
            <Line>
                Blessed are you <Yahweh />
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>You are the bread of life</Line>
            <Line>Broken for all our sins</Line>
            <Line>You are the sacrifice</Line>
            <Line>that brings life to all men</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { BlessedAreYou }
