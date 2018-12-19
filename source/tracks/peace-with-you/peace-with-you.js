import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"

const PeaceWithYou = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:22",
            "00:42",
            "00:59",
            "01:15",
            "01:31",
            "01:50",
            "02:06",
            "02:22",
            "02:38",
            "02:53",
            "03:10",
            "03:25",
        ]}
        music="peace_with_you_peace_with_you"
        {...props}
    >
        <Title>Peace With You</Title>
        <Verse>
            <Line>Deep in the heart of my soul</Line>
            <Line>I know you’ll never forsake me</Line>
            <Line>As long as this stormy wind blows</Line>
            <Line>I’ll cling to the truth of your word</Line>
        </Verse>
        <Verse>
            <Line>The suff’ring of those that I love</Line>
            <Line>The burden’s just too much to bear</Line>
            <Line>The chaos screams loud around me</Line>
            <Line>but I know there’s peace here with you</Line>
        </Verse>
        <Verse name="one">
            <Line>Draw me close to you</Line>
            <Line>There’s no one else for me, but you</Line>
        </Verse>
        <Verse name="two">
            <Line>The sorrow is too much</Line>
            <Line>I can’t see the way out</Line>
            <Line>I know that you’ll carry me through</Line>
        </Verse>
        <Verse name="three">
            <Line>There is peace</Line>
            <Line>there is peace here with you</Line>
            <Line>Draw me close and I’ll cling to you</Line>
        </Verse>
        <Verse name="four">
            <Line>There is no one else</Line>
            <Line>that can do what you do</Line>
            <Line>There is peace</Line>
            <Line>there is peace here with you</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse>
            <Line>There is peace</Line>
            <Line>there is peace here with you</Line>
        </Verse>
    </Track>
)

export { PeaceWithYou }
