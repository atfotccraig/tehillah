import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yisrael } from "app/components"
import Labels from "app/labels"

const Tehillim131 = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:25",
            "00:38",
            "01:04",
            "01:15",
            "01:28",
            "01:54",
            "02:43",
        ]}
        music="living_waters_tehillim_131"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim131 />
        </Title>
        <Verse name="one">
            <Line><Yahweh />, my heart is not lifted up</Line>
            <Line>My eyes are not raised too high</Line>
        </Verse>
        <Verse name="two">
            <Line>I do not occupy myself</Line>
            <Line>with things too great</Line>
            <Line>and too marvellous for me</Line>
        </Verse>
        <Verse name="three">
            <Line>But I have calmed and quieted my soul</Line>
            <Line>Like a weaned child with its mother</Line>
            <Line>Like a weaned child is my soul</Line>
            <Line>is my soul within me</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat>
            <Line>Oh <Yisrael />, hope in <Yahweh /></Line>
            <Line>Oh <Yisrael />, hope in <Yahweh /></Line>
            <Line>Oh <Yisrael />, hope in <Yahweh /></Line>
            <Line>From this time and forevermore</Line>
        </Verse>
        <Verse repeat>
            <Line>From this time and forevermore</Line>
        </Verse>
    </Track>
)

export { Tehillim131 }
