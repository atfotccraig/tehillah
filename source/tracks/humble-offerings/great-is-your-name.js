import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const GreatIsYourName = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "00:47",
            "01:12",
            "01:35",
            "02:00",
            "02:22",
            "03:08",
        ]}
        music="humble_offerings_great_is_your_name"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.GreatIsYourName />
        </Title>
        <Verse>
            <Line>
                <Yahshua />, Mashiach
            </Line>
            <Line>We bow before your throne</Line>
            <Line>in adoration and praise</Line>
        </Verse>
        <Verse name="one">
            <Line>Great is your name</Line>
            <Line>and greatly to be praised</Line>
            <Line>Awesome in power, mighty in strength</Line>
            <Line>Great is your name! Great is your name!</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahshua />, fountain of delight
            </Line>
            <Line>Word that lights my path</Line>
            <Line>every day and night for all time</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>
                <Yahshua />, right hand of Elohim
            </Line>
            <Line>salvation is with you</Line>
            <Line>And in you everything has been made</Line>
        </Verse>
        <Verse repeat>
            <Line>Great is your name</Line>
            <Line>and greatly to be praised</Line>
            <Line>Awesome in power, mighty in strength</Line>
            <Line>Great is your name! Great is your name!</Line>
        </Verse>
        <Verse>
            <Line>Great is your name!</Line>
        </Verse>
    </Track>
)

export { GreatIsYourName }
