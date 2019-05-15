import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim23 = props => (
    <Track
        cues={[
            "00:00",
            "00:26",
            "00:39",
            "00:51",
            "01:04",
            "01:17",
            "01:30",
            "01:43",
            "01:56",
            "02:08",
            "02:21",
            "02:34",
            "02:47",
            "02:59",
            "03:12",
            "03:24",
            "03:37",
        ]}
        music="living_waters_tehillim_23"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim23 />
        </Title>
        <Verse name="one">
            <Line><Yahweh /> is my shepherd</Line>
            <Line>and I shall not want</Line>
            <Line>With Him I lie down</Line>
            <Line>in green pastures</Line>
        </Verse>
        <Verse name="two">
            <Line>He leads me beside</Line>
            <Line>quiet waters of life</Line>
            <Line>And there He restores my soul</Line>
        </Verse>
        <Verse name="three">
            <Line>He leads me</Line>
            <Line>in paths of righteousness</Line>
            <Line>All for the sake of His name</Line>
        </Verse>
        <Verse name="four">
            <Line>And even though I wander</Line>
            <Line>through the valley of death</Line>
            <Line>I will not fear for He is by my side</Line>
        </Verse>
        <Verse name="five">
            <Line>His rod and his staff</Line>
            <Line>are a comfort to me</Line>
            <Line>He spreads for me</Line>
            <Line>a table before my enemies</Line>
        </Verse>
        <Verse name="six">
            <Line>My head He has anointed</Line>
            <Line>with His anointing oil</Line>
            <Line>Truly my cup overflows</Line>
        </Verse>
        <Verse name="seven">
            <Line>Now goodness and mercy</Line>
            <Line>they run after me</Line>
            <Line>All the days of my life</Line>
        </Verse>
        <Verse>
            <Line>And I will make my dwelling</Line>
            <Line>in the house of <Yahweh /></Line>
            <Line>Unto the length of all days</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Repeat name="seven" />
        <Verse repeat>
            <Line>And I will make my dwelling</Line>
            <Line>in the house of <Yahweh /></Line>
            <Line>Unto the length of all days</Line>
        </Verse>
    </Track>
)

export { Tehillim23 }
