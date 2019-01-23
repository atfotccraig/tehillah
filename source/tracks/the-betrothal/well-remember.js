import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const WellRemember = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:28",
            "00:41",
            "00:50",
            "01:05",
            "01:27",
            "01:51",
            "02:01",
            "02:13",
            "02:23",
            "02:37",
        ]}
        music="the_betrothal_well_remember"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.WellRemember />
        </Title>
        <Verse name="one">
            <Line>We’ll remember</Line>
            <Line>never to forget</Line>
            <Line>We’ll remember</Line>
            <Line>that you’ve never left us yet</Line>
        </Verse>
        <Verse name="two">
            <Line>We’ll remember</Line>
            <Line>all the good that you have done</Line>
            <Line>And on this day</Line>
            <Line>we will praise the most high one</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Our fathers before us</Line>
            <Line>dwelt in tents for forty years</Line>
            <Line>But you were their beacon</Line>
            <Line>in the cloud where you appeared</Line>
        </Verse>
        <Verse>
            <Line>And so our hearts cry to you, father</Line>
            <Line>come and be our light</Line>
            <Line>We long to see you, long to know you</Line>
            <Line>You are our delight</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>And on this day</Line>
            <Line>we will praise the most high one</Line>
        </Verse>
    </Track>
)

export { WellRemember }
