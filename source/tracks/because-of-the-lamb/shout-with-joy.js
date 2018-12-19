import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"

const ShoutWithJoy = props => (
    <Track
        cues={[
            "00:00",
            "00:10",
            "00:22",
            "00:42",
            "00:53",
            "01:13",
            "01:24",
            "01:44",
            "01:55",
            "02:15",
            "02:26",
        ]}
        music="because_of_the_lamb_shout_with_joy"
        {...props}
    >
        <Title>Shout With Joy</Title>
        <Verse name="one">
            <Line>Shout with joy to Elohim</Line>
            <Line>Shout with joy to Elohim</Line>
        </Verse>
        <Verse name="two">
            <Line>All the earth, shout with joy</Line>
            <Line>All the earth, shout with joy</Line>
            <Line>All the earth, shout with joy</Line>
            <Line>Shout with joy, to Elohim</Line>
        </Verse>
        <Verse>
            <Line>All the earth will bow to you</Line>
            <Line>They’ll sing praises just to you</Line>
        </Verse>
        <Verse>
            <Line>Sing the splendour of your name</Line>
            <Line>Sing the splendour of your name</Line>
            <Line>Sing the splendour of your name</Line>
            <Line>Esteem your praise, they’ll shout with joy</Line>
        </Verse>
        <Verse>
            <Line>Come see the works of Elohim</Line>
            <Line>His awesome deeds towards all men</Line>
        </Verse>
        <Verse>
            <Line>He turned the sea into dry land</Line>
            <Line>He turned the sea into dry land</Line>
            <Line>He turned the sea into dry land</Line>
            <Line>There we rejoiced, in Elohim!</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { ShoutWithJoy }
