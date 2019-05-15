import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const HouseOnTheRock = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:30",
            "00:43",
            "00:55",
            "01:07",
            "01:21",
            "01:35",
            "01:47",
            "01:59",
            "02:11",
            "02:24",
            "02:35",
        ]}
        music="living_waters_house_on_the_rock"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.HouseOnTheRock />
        </Title>
        <Verse repeat>
            <Line>For years I built my house alone</Line>
            <Line>thinking I was set on stone</Line>
        </Verse>
        <Verse>
            <Line>But then the storm came</Line>
            <Line>And then the rain came</Line>
            <Line>And suddenly it all washed away</Line>
            <Line>it washed away</Line>
        </Verse>
        <Verse>
            <Line>‘Cause then the storm came</Line>
            <Line>And then the rain came</Line>
            <Line>The sand beneath my feet</Line>
            <Line>just washed away</Line>
            <Line>it washed away</Line>
        </Verse>
        <Verse>
            <Line>It fell away beneath me</Line>
            <Line>it fell apart around me</Line>
            <Line>The house I’d built myself</Line>
            <Line>came crashing to the floor</Line>
        </Verse>
        <Verse>
            <Line>It fell away beneath me</Line>
            <Line>it fell apart around me</Line>
            <Line>The thing that I had loved</Line>
            <Line>was suddenly no more</Line>
        </Verse>
        <Verse repeat>
            <Line>But now I know my house will stand</Line>
            <Line>no longer do I build on sand</Line>
        </Verse>
        <Verse>
            <Line>So let the storm come</Line>
            <Line>And let the rain come</Line>
            <Line>The Rock I’m building on</Line>
            <Line>will never wash away</Line>
        </Verse>
        <Verse>
            <Line>Yes, let the storm come</Line>
            <Line>And let the rain come</Line>
            <Line>The solid Rock I’m on</Line>
            <Line>will never wash away</Line>
        </Verse>
        <Verse name="one">
            <Line>It’s standing firm beneath me</Line>
            <Line>it’s standing strong around me</Line>
            <Line>The house that You have built</Line>
            <Line>will stand forever more</Line>
        </Verse>
        <Verse name="two">
            <Line>It’s standing firm beneath me</Line>
            <Line>it’s standing strong around me</Line>
            <Line>The house where You will dwell</Line>
            <Line>will stand forever more</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { HouseOnTheRock }
