import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const WalkWithMe = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:43",
            "01:24",
            "01:54",
            "02:32",
            "03:13",
            "03:42",
        ]}
        music="refined_walk_with_me"
        {...props}
    >
        <Title>
            <Labels.Refined.WalkWithMe />
        </Title>
        <Verse repeat>
            <Line>I walk with You</Line>
            <Line>in the cool of the evening</Line>
            <Line>I talk with You</Line>
            <Line>at the break of dawn</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>Hear my prayer</Line>
            <Line>as I seek Your face</Line>
            <Line>walk with me</Line>
            <Line>as I live in Your loving-commitment</Line>
        </Verse>
        <Verse repeat repeatText="x3" name="two">
            <Line>You alone are worthy of my praise</Line>
        </Verse>
        <Verse>
            <Line>Halleluyah</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x10">
            <Line>Halleluyah</Line>
        </Verse>
    </Track>
)

export { WalkWithMe }
