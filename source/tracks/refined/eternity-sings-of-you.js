import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const EternitySingsOfYou = props => (
    <Track
        cues={[
            "00:00",
            "00:07",
            "00:30",
            "00:41",
            "01:04",
            "01:16",
            "02:24",
            "02:47",
            "02:56",
            "03:19",
            "03:30",
            "03:52",
            "04:04",
            "05:10",
            "05:32",
            "05:43",
            "06:05",
        ]}
        music="refined_eternity_sings_of_you"
        {...props}
    >
        <Title>
            <Labels.Refined.EternitySingsOfYou />
        </Title>
        <Verse repeat name="one">
            <Line>Isn’t it amazing, isn’t it amazing</Line>
        </Verse>
        <Verse name="two">
            <Line>Who You are, who You are, who You are</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>Isn’t it so wonderful, isn’t it so wonderful</Line>
        </Verse>
        <Verse name="four">
            <Line>What You do, what You do, what you do</Line>
        </Verse>
        <Verse repeat>
            <Line>I stand in awe of You, I stand in awe of You</Line>
            <Line>Eternity sings of Your praise</Line>
        </Verse>
        <Verse repeat name="seven">
            <Line>You are worthy, You are worthy</Line>
            <Line>You are worthy</Line>
        </Verse>
        <Verse name="eight">
            <Line>Eternity sings of You!</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse repeat>
            <Line>I stand in awe of You, I stand in awe of You</Line>
            <Line>Eternity sings of Your praise</Line>
        </Verse>
        <Repeat name="seven" />
        <Repeat name="eight" />
        <Repeat name="seven" />
        <Repeat name="eight" />
    </Track>
)

export { EternitySingsOfYou }
