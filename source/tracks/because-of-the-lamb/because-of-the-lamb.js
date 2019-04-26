import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const BecauseOfTheLamb = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:35",
            "00:46",
            "01:01",
            "01:16",
            "01:24",
            "01:31",
            "01:39",
            "01:53",
            "02:08",
        ]}
        music="because_of_the_lamb_because_of_the_lamb"
        {...props}
    >
        <Title>
            <Labels.BecauseOfTheLamb.BecauseOfTheLamb />
        </Title>
        <Verse>
            <Line>Today is the day we repent</Line>
            <Line>of all sin, of all sin, of all sin</Line>
            <Line>Today is the day we confess</Line>
            <Line>all our sins, all our sins, all our sins</Line>
        </Verse>
        <Verse>
            <Line>Our fathers before us have sinned</Line>
            <Line>and have done what is wrong</Line>
            <Line>
                in Your eyes <Yahweh />
            </Line>
        </Verse>
        <Verse name="one">
            <Line>But, through the blood</Line>
            <Line>the blood of the Lamb</Line>
            <Line>We are here in Your presence, today</Line>
        </Verse>
        <Verse name="two">
            <Line>But, through the blood</Line>
            <Line>the blood of the Lamb</Line>
            <Line>
                We are here in Your presence, <Yahweh />
            </Line>
        </Verse>
        <Verse>
            <Line>What a joy fills our heart</Line>
            <Line>when we think about the Lamb</Line>
            <Line>What a joy just to know</Line>
            <Line>
                what <Yahshua /> has done
            </Line>
        </Verse>
        <Verse>
            <Line>Today is the day</Line>
            <Line>for all to rejoice</Line>
            <Line>Because of the Lamb</Line>
            <Line>the world is restored</Line>
        </Verse>
        <Verse>
            <Line>Today is the day</Line>
            <Line>for us to rejoice</Line>
            <Line>Because of His blood</Line>
            <Line>the veil has been torn</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>We are here in Your presence, today</Line>
        </Verse>
    </Track>
)

export { BecauseOfTheLamb }
