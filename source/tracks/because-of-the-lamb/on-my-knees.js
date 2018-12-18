import React from "react"
import { Line, Repeat, Title, Track, Verse } from "../../components"

const OnMyKnees = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:37",
            "01:03",
            "01:29",
            "02:18",
            "03:03",
            "03:28",
            "04:13",
        ]}
        music="because_of_the_lamb_on_my_knees"
        {...props}
    >
        <Title>On My Knees</Title>
        <Verse>
            <Line>You never told me</Line>
            <Line>that this life would be easy</Line>
            <Line>You only promised that</Line>
            <Line>you would never ever leave me</Line>
        </Verse>
        <Verse>
            <Line>So I come to you now</Line>
            <Line>seeking grace to hold on</Line>
            <Line>‘Cause you’re the one</Line>
            <Line>who makes me strong</Line>
            <Line>You’re the one</Line>
            <Line>who makes me strong</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>On my knees engaged in battle</Line>
            <Line>On my knees I overcome</Line>
            <Line>On my knees I won’t surrender</Line>
            <Line>On my knees the day is won</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>On my knees praying daily</Line>
            <Line>On my knees seeking You</Line>
            <Line>On my knees being strengthened</Line>
            <Line>On my knees I’m made new</Line>
        </Verse>
        <Verse repeat>
            <Line>I’m pressed down but I’m not broken</Line>
            <Line>Persecuted but not abandoned</Line>
            <Line>Struck down but not destroyed</Line>
            <Line>In Your presence I’m liberated</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>I’m made new</Line>
        </Verse>
    </Track>
)

export { OnMyKnees }
