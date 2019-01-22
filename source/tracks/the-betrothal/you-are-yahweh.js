import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const YouAreYahweh = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:32",
            "00:46",
            "00:57",
            "01:08",
            "01:20",
            "01:30",
            "01:42",
            "01:54",
            "02:09",
            "02:24",
            "02:35",
            "02:46",
            "02:57",
            "03:08",
            "03:19",
            "03:30",
            "03:41",
            "03:53",
        ]}
        music="the_betrothal_you_are_yahweh"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.YouAreYahweh />
        </Title>
        <Verse>
            <Line>Empty me of me</Line>
            <Line>so that I can be more like you</Line>
        </Verse>
        <Verse>
            <Line>Fill me up with you</Line>
            <Line>so that I can do all your will</Line>
        </Verse>
        <Verse>
            <Line>Let me know your heart</Line>
            <Line>let me seek it out</Line>
            <Line>with every breath I take</Line>
        </Verse>
        <Verse>
            <Line>Let me be set apart</Line>
            <Line>let me honour you</Line>
            <Line>with every move I make</Line>
        </Verse>
        <Verse name="one">
            <Line>
                For you are <Yahweh />, great and strong
            </Line>
            <Line>
                Yes you are <Yahweh />, the mighty One
            </Line>
        </Verse>
        <Verse name="two">
            <Line>
                Oh you are <Yahweh />, I worship you
            </Line>
            <Line>All that you command me I will do</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Now I give my life</Line>
            <Line>a living sacrifice all for you</Line>
        </Verse>
        <Verse>
            <Line>Come and shine your light</Line>
            <Line>chase away the night</Line>
            <Line>Bring your truth</Line>
        </Verse>
        <Verse>
            <Line>Let me run with your word</Line>
            <Line>let me take it to the nations all around</Line>
        </Verse>
        <Verse>
            <Line>Let me not be silent</Line>
            <Line>but everywhere I go</Line>
            <Line>declare the sound</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>All that you command me I will do</Line>
        </Verse>
    </Track>
)

export { YouAreYahweh }
