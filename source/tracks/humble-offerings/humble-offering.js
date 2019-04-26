import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const HumbleOffering = props => (
    <Track
        cues={[
            "00:00",
            "00:25",
            "00:37",
            "00:49",
            "01:01",
            "01:12",
            "01:25",
            "01:36",
            "01:48",
            "02:00",
            "02:12",
            "02:24",
            "02:36",
            "02:48",
            "03:00",
            "03:11",
            "03:23",
            "03:35",
        ]}
        music="humble_offerings_humble_offering"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HumbleOffering />
        </Title>
        <Verse name="one">
            <Line>This is my humble offering</Line>
            <Line>I bring it to You freely</Line>
            <Line>It isn't much, but this is all I have</Line>
        </Verse>
        <Verse name="two">
            <Line>I know You can use it</Line>
            <Line>and make it something special</Line>
            <Line>Father, please accept this offering</Line>
            <Line>from my hand</Line>
        </Verse>
        <Verse>
            <Line>You can take two fishes and five loaves</Line>
            <Line>to feed a hungry multitude</Line>
            <Line>with food that no-one knows</Line>
        </Verse>
        <Verse>
            <Line>And You always use the simple things</Line>
            <Line>to accomplish Your great plan</Line>
            <Line>So would You use</Line>
            <Line>this humble offering in my hand</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Two copper coins are put into a jar</Line>
            <Line>To anyone who didn’t know</Line>
            <Line>these would seem very far</Line>
        </Verse>
        <Verse>
            <Line>from the offerings that others bring</Line>
            <Line>but You look to the heart</Line>
            <Line>and this humble offering</Line>
            <Line>moved you from the start</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>An alabaster flask of costly oil</Line>
            <Line>broken and poured out for You</Line>
            <Line>the anointing for Your toil</Line>
        </Verse>
        <Verse>
            <Line>And gladly You rejoice in that</Line>
            <Line>which others would despise</Line>
            <Line>Please accept this</Line>
            <Line>humble offering of my life</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Father, please accept this offering</Line>
            <Line>from my hand</Line>
        </Verse>
    </Track>
)

export { HumbleOffering }
