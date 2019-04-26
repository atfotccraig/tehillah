import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const WonderfulMaker = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:29",
            "00:54",
            "01:19",
            "01:45",
            "02:09",
            "02:32",
            "02:56",
            "03:20",
        ]}
        music="wonderful_maker_wonderful_maker"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.WonderfulMaker />
        </Title>
        <Verse>
            <Line>To You, I will sing</Line>
            <Line>for as long as I breathe</Line>
            <Line>Boasting in adoration</Line>
            <Line>the wonder of my Maker</Line>
        </Verse>
        <Verse>
            <Line>Let praise for You</Line>
            <Line>be ever on my lips</Line>
            <Line>Just like You rejoice</Line>
            <Line>in Your created works</Line>
        </Verse>
        <Verse>
            <Line>You clothe yourself</Line>
            <Line>with wondrous splendour</Line>
            <Line>You wrap yourself in light itself</Line>
            <Line>Stretching out the curtains of heaven</Line>
            <Line>The deep holds up Your throne</Line>
        </Verse>
        <Verse>
            <Line>Your favour goes beyond the heavens</Line>
            <Line>Your faithfulness pass by the sky</Line>
            <Line>Your righteousness</Line>
            <Line>like mighty mountains</Line>
            <Line>Your judgements fill the depths</Line>
        </Verse>
        <Verse name="one">
            <Line>
                Oh <Yahweh />, You alone save man
            </Line>
            <Line>Every being takes refuge in You</Line>
            <Line>and we are filled with what You give</Line>
            <Line>With You hope springs to life</Line>
        </Verse>
        <Verse name="two">
            <Line>The earth is satisfied by You</Line>
            <Line>Your righteous works sustain all life</Line>
            <Line>Making thick clouds your chariots</Line>
            <Line>You walk on the wings of the wind</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>You walk on the wings of the wind</Line>
        </Verse>
    </Track>
)

export { WonderfulMaker }
