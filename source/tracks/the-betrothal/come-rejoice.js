import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ComeRejoice = props => (
    <Track
        cues={[
            "00:00",
            "00:17",
            "00:34",
            "00:51",
            "01:09",
            "01:26",
            "01:34",
            "01:44",
            "02:01",
            "02:19",
        ]}
        music="the_betrothal_come_rejoice"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.ComeRejoice />
        </Title>
        <Verse>
            <Line>You rejoice in the righteous of Your people</Line>
            <Line>You rejoice in the righteous of Your bride</Line>
            <Line>You rejoice in the righteous of Your people</Line>
            <Line>You rejoice, You rejoice, You rejoice</Line>
        </Verse>
        <Verse>
            <Line>Halleluyah, halleluyah, halleluyah</Line>
            <Line>You rejoice, You rejoice, You rejoice</Line>
        </Verse>
        <Verse>
            <Line>Sing a song oh the righteous of His people</Line>
            <Line>Sing a song oh the righteous of His bride</Line>
            <Line>Sing a song oh the righteous of His people</Line>
            <Line>Sing a song, sing a song, sing a song</Line>
        </Verse>
        <Verse>
            <Line>Halleluyah, halleluyah, halleluyah</Line>
            <Line>Sing a song, sing a song, sing a song</Line>
        </Verse>
        <Verse>
            <Line>Clap your hands</Line>
            <Line>oh the righteous of His people</Line>
            <Line>Clap your hands</Line>
            <Line>oh the righteous of His bride</Line>
        </Verse>
        <Verse>
            <Line>Clap your hands</Line>
            <Line>oh the righteous of His people</Line>
            <Line>Clap your hands, clap your hands</Line>
            <Line>clap your hands</Line>
        </Verse>
        <Verse>
            <Line>Halleluyah, halleluyah, halleluyah</Line>
            <Line>Clap your hands, clap your hands</Line>
            <Line>clap your hands</Line>
        </Verse>
        <Verse>
            <Line>Come rejoice oh the righteous of His people</Line>
            <Line>Come rejoice oh the righteous of His bride</Line>
            <Line>Come rejoice oh the righteous of His people</Line>
            <Line>Come rejoice, come rejoice, come rejoice</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah, halleluyah, halleluyah</Line>
            <Line>Come rejoice, come rejoice, come rejoice</Line>
        </Verse>
    </Track>
)

export { ComeRejoice }
