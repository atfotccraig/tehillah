import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const AncientWay = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:37",
            "00:56",
            "01:37",
            "01:56",
            "02:17",
            "03:34",
        ]}
        music="new_songs_ancient_way"
        {...props}
    >
        <Title>
            <Labels.NewSongs.AncientWay />
        </Title>
        <Verse>
            <Line>Stand in the ways and see</Line>
            <Line>Ask for the old path</Line>
            <Line>where the good way is</Line>
            <Line>Walk in it, and find</Line>
            <Line>rest for yourselves</Line>
        </Verse>
        <Verse>
            <Line>Open your ears to hear</Line>
            <Line>The One who’s calling,</Line>
            <Line>who can lead the Way</Line>
            <Line>He walks before us</Line>
            <Line>and will guide all our steps</Line>
        </Verse>
        <Verse>
            <Line>Come to Yah’shua, He’ll give you rest</Line>
            <Line>He’s pure and humble, He is The Way</Line>
            <Line>Come to Yah’shua, He guides the meek</Line>
            <Line>In love and kindness, to those who seek</Line>
        </Verse>
        <Verse>
            <Line>A crushed reed He will not break</Line>
            <Line>A smoking flax He doesn’t quench</Line>
            <Line>In compassion, He shows</Line>
            <Line>truth and salvation</Line>
        </Verse>
        <Verse>
            <Line>A refuge in times of need</Line>
            <Line>A comfort for hurt</Line>
            <Line>and troubled hearts</Line>
            <Line>The only Saviour who can</Line>
            <Line>show the path of life</Line>
        </Verse>
        <Verse repeat>
            <Line>Come to Yah’shua, He’ll give you rest</Line>
            <Line>He’s pure and humble, He is The Way</Line>
            <Line>Come to Yah’shua, He guides the meek</Line>
            <Line>In love and kindness, to those who seek</Line>
        </Verse>
        <Verse>
            <Line>Come to Yah’shua, come to Yah’shua</Line>
        </Verse>
    </Track>
)

export { AncientWay }
