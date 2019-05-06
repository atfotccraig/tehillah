import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ANewSong = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "00:48",
            "01:13",
            "01:54",
            "02:20",
            "02:46",
            "03:27",
        ]}
        music="wonderful_maker_a_new_song"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.ANewSong />
        </Title>
        <Verse>
            <Line>You’ve put a new song in my mouth</Line>
            <Line>I am blessed because I trust in You</Line>
            <Line>I recount the wonders You have done</Line>
            <Line>There is no-one to compare with You</Line>
        </Verse>
        <Verse>
            <Line>I delight to do Your will</Line>
            <Line>Yes, Your Torah is within my heart</Line>
            <Line>You have opened up my ears</Line>
            <Line>In Your scroll it is prescribed for me</Line>
        </Verse>
        <Verse name="one" repeat>
            <Line>And I will wait for You</Line>
            <Line>incline Your ear to me</Line>
            <Line>and hear my cry</Line>
        </Verse>
        <Verse>
            <Line>I cannot restrain my lips</Line>
            <Line>to proclaim the news of righteousness</Line>
            <Line>Your grace and truth encompass me</Line>
            <Line>In Your pleasure, Yah, deliver me</Line>
        </Verse>
        <Verse>
            <Line>You’ve put your precepts in my heart</Line>
            <Line>Now my feet are set on solid ground</Line>
            <Line>Walking in Your steadfast Word</Line>
            <Line>With Your goodness I am satisfied</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>My heart belongs to You alone</Line>
            <Line>You have captured me</Line>
            <Line>with Your great love</Line>
        </Verse>
    </Track>
)

export { ANewSong }
