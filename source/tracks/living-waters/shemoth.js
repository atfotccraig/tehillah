import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Shemoth = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:34",
            "00:48",
            "01:31",
            "01:54",
            "02:16",
            "02:30",
            "03:14",
            "03:38",
            "04:22",
            "05:05",
        ]}
        music="living_waters_shemoth"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Shemoth />
        </Title>
        <Verse name="one">
            <Line>Let all the nations You have made</Line>
            <Line>Come and bow themselves before Your face</Line>
            <Line>And give esteem unto Your name</Line>
            <Line>For You are great and You deserve all fame</Line>
        </Verse>
        <Verse name="two">
            <Line>My heart is unified in praise</Line>
            <Line>And to You only will my song be raised</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>Immanuel, my Ĕl is with me</Line>
            <Line><Yahweh /> Rapha, You heal my every wound</Line>
            <Line>Ĕl Ĕlyon, You’re high and You’re exalted</Line>
            <Line><Yahweh /> Shalom, in You I find my peace</Line>
        </Verse>
        <Verse repeat repeatText="x4" name="four">
            <Line>All my fountains are in You</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Verse repeat repeatText="x8">
            <Line>All my fountains are in You</Line>
        </Verse>
        <Verse>
            <Line>Immanuel</Line>
        </Verse>
    </Track>
)

export { Shemoth }
