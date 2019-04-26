import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const GatherUs = props => (
    <Track
        cues={["00:00", "00:24", "01:36", "02:00"]}
        music="the_betrothal_gather_us"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.GatherUs />
        </Title>
        <Verse repeat name="one">
            <Line>Gather us, gather us</Line>
            <Line>We are the remnant of Your people</Line>
            <Line>We are the chosen of Your bride</Line>
            <Line>We are the remnant of Your people</Line>
            <Line>Gather us to Your side</Line>
        </Verse>
        <Verse>
            <Line>We declare that You are He</Line>
            <Line>The One who causes us to be</Line>
            <Line>You are the Rock on whom we stand</Line>
            <Line>and we are safely in Your hand</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { GatherUs }
