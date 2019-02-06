import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YouAreWorthy = props => (
    <Track
        cues={["00:00", "00:24", "00:47", "01:34", "01:56"]}
        music="humble_offerings_you_are_worthy"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.YouAreWorthy />
        </Title>
        <Verse>
            <Line>You are worthy of all honour</Line>
            <Line>You are worthy of all fame</Line>
            <Line>You are worthy, we lift you higher</Line>
            <Line>You are worthy, we praise your name</Line>
        </Verse>
        <Verse repeat>
            <Line>And we will sing a song of love to you</Line>
            <Line>And we will shout in adoration</Line>
            <Line>And we’ll declare</Line>
            <Line>the wonders of your majesty</Line>
            <Line>We’ll make you known in all creation</Line>
        </Verse>
        <Verse>
            <Line>You are worthy to be worshipped</Line>
            <Line>You are worthy, we bow down</Line>
            <Line>You are worthy to be exalted</Line>
            <Line>You are worthy to receive our crown</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah, praise the Lamb</Line>
            <Line>Halleluyah, praise your wondrous name</Line>
            <Line>Halleluyah, praise the Lamb</Line>
            <Line>Halleluyah, praise your wondrous name</Line>
        </Verse>
    </Track>
)

export { YouAreWorthy }
