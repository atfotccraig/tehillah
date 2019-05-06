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

const ComeYahshuaCome = props => (
    <Track
        cues={[
            "00:00",
            "00:17",
            "00:31",
            "00:58",
            "01:26",
            "01:40",
            "01:53",
            "02:06",
            "02:20",
            "02:46",
            "03:14",
            "03:27",
            "03:41",
            "04:08",
            "05:01",
        ]}
        music="peace_with_you_come_yahshua_come"
        {...props}
    >
        <Title>
            <Labels.PeaceWithYou.ComeYahshuaCome />
        </Title>
        <Verse>
            <Line>
                When <Yahshua /> puts His feet in Tsiyon
            </Line>
            <Line>we will be like dreamers</Line>
            <Line>As we see Him returning on the clouds</Line>
            <Line>to make His dwelling with us</Line>
        </Verse>
        <Verse name="one" repeat>
            <Line>
                Come <Yahshua /> come!
            </Line>
            <Line>
                We bless You in the Name of <Yahweh />
            </Line>
        </Verse>
        <Verse name="two">
            <Line>
                Praise <Yahweh /> among the nations
            </Line>
            <Line>Declare His Name in all the earth</Line>
            <Line>Make known His kingdom to the peoples</Line>
            <Line>His rule, His reign is drawing near</Line>
        </Verse>
        <Verse name="three">
            <Line>
                <Yahweh /> has done great deeds for us
            </Line>
            <Line>Our mouths are filled with laughter</Line>
            <Line>He brought us back from captivity</Line>
            <Line>Our tongues rejoice with singing</Line>
        </Verse>
        <Verse name="four">
            <Line>Those sowing in tears will reap with joy</Line>
            <Line>The ones who mourned</Line>
            <Line>bearing precious sheaves</Line>
            <Line>Bringing our brothers from everywhere</Line>
            <Line>
                as an offering to <Yahweh />
            </Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="one" />
        <Verse repeat>
            <Line>
                Praise <Yahweh /> among the nations
            </Line>
            <Line>Declare His Name in all the earth</Line>
            <Line>Make known His kingdom to the peoples</Line>
            <Line>His rule, His reign is drawing near</Line>
        </Verse>
        <Verse>
            <Line>His rule, His reign is drawing near</Line>
        </Verse>
    </Track>
)

export { ComeYahshuaCome }
