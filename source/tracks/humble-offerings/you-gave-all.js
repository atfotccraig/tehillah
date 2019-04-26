import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YouGaveAll = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "00:45",
            "01:06",
            "01:29",
            "01:50",
            "02:12",
            "02:56",
        ]}
        music="humble_offerings_you_gave_all"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.YouGaveAll />
        </Title>
        <Verse name="one">
            <Line>Here I am now</Line>
            <Line>I fall at Your feet</Line>
            <Line>And in Your presence</Line>
            <Line>I’m made complete</Line>
        </Verse>
        <Verse name="two">
            <Line>You touched my life</Line>
            <Line>and made me clean</Line>
            <Line>And by Your blood</Line>
            <Line>I’ve been redeemed and healed</Line>
        </Verse>
        <Verse>
            <Line>You have called me by my name</Line>
            <Line>You have bought me at great cost</Line>
            <Line>You gave Your life to seek</Line>
            <Line>and save what was lost</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>You have called me by my name</Line>
            <Line>You have bought me at great cost</Line>
            <Line>You gave Your life to seek</Line>
            <Line>and save what was lost</Line>
        </Verse>
        <Verse>
            <Line>You gave Your life to seek</Line>
            <Line>and save what was lost</Line>
        </Verse>
    </Track>
)

export { YouGaveAll }
