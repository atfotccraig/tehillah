import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const ComeSingASongWithMe = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:22",
            "00:41",
            "01:01",
            "01:20",
            "01:38",
            "01:58",
            "02:17",
            "02:36",
            "02:55",
        ]}
        music="treasured_possession_come_sing_a_song_with_me"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.ComeSingASongWithMe />
        </Title>
        <Verse repeat name="one">
            <Line>Come sing a song with me</Line>
            <Line>Come sing a song of praise</Line>
            <Line>Come sing a song to the Ancient of Days</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>
                Oh <Yahshua />, You are, You are my King
            </Line>
            <Line>You are my Master and my Elohim</Line>
        </Verse>
        <Verse name="three">
            <Line>Come sing a song with me</Line>
            <Line>Praise from the earth, echoes on high</Line>
            <Line>Come and rejoice and sing</Line>
            <Line>Come sing a song, come sing a song</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
    </Track>
)

export { ComeSingASongWithMe }
