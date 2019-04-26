import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const Offering = props => (
    <Track
        cues={[
            "00:00",
            "00:14",
            "00:38",
            "00:51",
            "01:15",
            "01:41",
            "02:32",
            "02:44",
        ]}
        music="pleasing_you_offering"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.Offering />
        </Title>
        <Verse>
            <Line>You do not delight in sacrifice</Line>
            <Line>You do not delight in offering</Line>
            <Line>Or surely I would bring</Line>
            <Line>Or surely I would bring</Line>
        </Verse>
        <Verse>
            <Line>But the sacrifice that You desire</Line>
            <Line>is a broken, contrite heart</Line>
        </Verse>
        <Verse>
            <Line>I could never bring an offering</Line>
            <Line>when it hasn't cost me anything</Line>
            <Line>You paid the price for me</Line>
            <Line>I'll count the cost for You</Line>
        </Verse>
        <Verse>
            <Line>Create in me a steadfast heart</Line>
            <Line>and cast me not away</Line>
            <Line>Restore to me the joy You give</Line>
            <Line>to those upheld by You</Line>
        </Verse>
        <Verse repeat>
            <Line>Let my tongue sing aloud</Line>
            <Line>of Your righteousness</Line>
            <Line>Open up my lips</Line>
            <Line>to declare Your praise</Line>
        </Verse>
        <Verse>
            <Line>You desire truth</Line>
            <Line>in the inward parts</Line>
            <Line>and in the hidden place</Line>
            <Line>You make me wise</Line>
        </Verse>
        <Verse>
            <Line>So wash me and I'll be clean</Line>
            <Line>to bring an offering</Line>
        </Verse>
    </Track>
)

export { Offering }
