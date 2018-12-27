import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const AllICanGive = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:26",
            "00:48",
            "01:10",
            "01:31",
            "01:52",
            "02:14",
            "02:35",
            "02:56",
            "03:18",
            "03:39",
        ]}
        music="treasured_possession_all_i_can_give"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.AllICanGive />
        </Title>
        <Verse>
            <Line>If the trees of the field can clap their hands</Line>
            <Line>what about me?</Line>
            <Line>If the song of the wind can praise your name</Line>
            <Line>what about me?</Line>
        </Verse>
        <Verse>
            <Line>If the mountains bring peace</Line>
            <Line>and the sun obey your voice</Line>
            <Line>then what about me?</Line>
            <Line>All creation declare there is none to compare</Line>
            <Line>so what about me?</Line>
        </Verse>
        <Verse name="one">
            <Line>I will not be outdone by creation</Line>
            <Line>in your image you’ve given me life</Line>
            <Line>If the rocks can cry out in amazement</Line>
            <Line>my whole being will surely rejoice!</Line>
        </Verse>
        <Verse name="two">
            <Line>I will dance like the meadows in springtime</Line>
            <Line>I will sing like the birds in the trees</Line>
            <Line>I will praise you with all that is in me</Line>
            <Line>all that I am is all I can give</Line>
        </Verse>
        <Verse>
            <Line>My eyes will focus on your precepts</Line>
            <Line>My mouth declare your righteousness</Line>
            <Line>My hands be raised in thankful praise</Line>
            <Line>My feet walk in your steadfast ways</Line>
        </Verse>
        <Verse>
            <Line>I am planted in your house, Yah</Line>
            <Line>and I flourish in your courts</Line>
            <Line>Let my life sing a song</Line>
            <Line>that will praise your name</Line>
            <Line>and my heart stand forever in awe</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>I will praise you with all that is in me</Line>
            <Line>all that I am is all I can give</Line>
        </Verse>
    </Track>
)

export { AllICanGive }
