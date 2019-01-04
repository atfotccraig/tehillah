import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YourPresence = props => (
    <Track
        cues={["00:00", "00:10", "00:33", "00:59", "01:23", "01:46"]}
        music="new_songs_your_presence"
        {...props}
    >
        <Title>
            <Labels.NewSongs.YourPresence />
        </Title>
        <Verse name="one">
            <Line>I lift my hands, an offering</Line>
            <Line>to honour and esteem my king</Line>
            <Line>I raise my voice, to you I sing</Line>
            <Line>an honest prayer of thanksgiving</Line>
        </Verse>
        <Verse>
            <Line>For the day I called you answered me</Line>
            <Line>There is nowhere else I’d rather be</Line>
            <Line>You will never change</Line>
            <Line>and you will remain</Line>
            <Line>Some may fall away, but I want to stay</Line>
        </Verse>
        <Verse>
            <Line>In your presence is life’s essence</Line>
            <Line>there is no-one else worth standing for</Line>
            <Line>In your presence is life’s essence</Line>
            <Line>You can fill my life with joy and peace</Line>
        </Verse>
        <Verse>
            <Line>In your presence is life’s essence</Line>
            <Line>there is nothing else worth bowing to</Line>
            <Line>In your presence is life’s essence</Line>
            <Line>it is why I live, I will praise you</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { YourPresence }
