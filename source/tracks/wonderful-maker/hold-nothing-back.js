import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const HoldNothingBack = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:19",
            "00:26",
            "00:54",
            "01:01",
            "01:08",
            "01:36",
            "01:42",
            "01:51",
            "02:19",
            "02:26",
            "02:33",
            "03:01",
        ]}
        music="wonderful_maker_hold_nothing_back"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.HoldNothingBack />
        </Title>
        <Verse name="one">
            <Line>With my hands lifted high</Line>
            <Line>and my eyes on the prize</Line>
            <Line>I will run</Line>
        </Verse>
        <Verse name="two">
            <Line>I will offer myself</Line>
            <Line>for the sake of Your Name</Line>
            <Line>The Living One</Line>
        </Verse>
        <Verse name="three" repeat>
            <Line>I will not be silent</Line>
            <Line>no I will ever be singing</Line>
            <Line>I will raise my voice up</Line>
            <Line>to You the praises I’m bringing</Line>
        </Verse>
        <Verse name="four">
            <Line>I will not give up</Line>
            <Line>and I’ll never draw back</Line>
            <Line>from this fight</Line>
        </Verse>
        <Verse name="five">
            <Line>Each step I take is</Line>
            <Line>for Your Kingdom’s sake</Line>
            <Line>Shine Your light</Line>
        </Verse>
        <Verse name="six" repeat>
            <Line>I will stand in wonder</Line>
            <Line>and see my enemies scattered</Line>
            <Line>In the light of Your face</Line>
            <Line>the power of darkness is shattered</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="one" />
    </Track>
)

export { HoldNothingBack }
