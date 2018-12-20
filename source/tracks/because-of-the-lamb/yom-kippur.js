import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const YomKippur = props => (
    <Track
        cues={[
            "00:00",
            "00:14",
            "00:28",
            "00:40",
            "01:08",
            "01:21",
            "01:33",
            "02:00",
            "02:14",
        ]}
        music="because_of_the_lamb_yom_kippur"
        {...props}
    >
        <Title>
            <Labels.BecauseOfTheLamb.YomKippur />
        </Title>
        <Verse name="one">
            <Line>Yom Kippur is here</Line>
            <Line>
                <Yahweh /> has done great things
            </Line>
            <Line>He has brought us near to his throne</Line>
        </Verse>
        <Verse name="two">
            <Line>He is our Elohim</Line>
            <Line>He’s also the high priest</Line>
            <Line>He has bought us with his blood</Line>
        </Verse>
        <Verse name="three">
            <Line>
                Halleluyah, praise <Yahweh />
            </Line>
            <Line>Halleluyah, praise his name</Line>
            <Line>We will sing and celebrate this great day</Line>
            <Line>
                For <Yahshua /> is king of kings
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>We will sing and celebrate this great day</Line>
            <Line>
                For <Yahshua /> is king of kings
            </Line>
        </Verse>
        <Verse>
            <Line>
                For <Yahshua /> is king of kings
            </Line>
        </Verse>
    </Track>
)

export { YomKippur }
