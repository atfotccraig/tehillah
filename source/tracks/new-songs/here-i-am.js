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

const HereIAm = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:48",
            "00:58",
            "01:17",
            "01:41",
            "01:51",
            "02:09",
            "02:33",
            "02:44",
            "02:54",
        ]}
        music="new_songs_here_i_am"
        {...props}
    >
        <Title>
            <Labels.NewSongs.HereIAm />
        </Title>
        <Verse repeat>
            <Line>The blessing and esteem and the wisdom</Line>
            <Line>The thanksgiving and respect</Line>
            <Line>The power and the might to our Elohim</Line>
            <Line>forever and ever amen</Line>
        </Verse>
        <Verse name="one">
            <Line>And I will bow down on my knees</Line>
            <Line>to worship You</Line>
            <Line>And I’ll raise up my hands</Line>
            <Line>toward Your throne</Line>
        </Verse>
        <Verse name="two">
            <Line>And I will lift up my voice</Line>
            <Line>to give You praise</Line>
            <Line>And I surrender, I surrender</Line>
            <Line>before Your face</Line>
            <Line>And I surrender, I surrender</Line>
            <Line>before Your face</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>Here I am to seek Your face</Line>
            <Line>Here I am to give You praise</Line>
            <Line>Here I am to seek Your reign</Line>
            <Line>Here I am to esteem Your Name</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Verse>
            <Line>And I will lift up my voice</Line>
            <Line>to give You praise</Line>
            <Line>And I surrender, I surrender</Line>
            <Line>before Your face</Line>
        </Verse>
        <Verse repeat>
            <Line>And I surrender, I surrender</Line>
            <Line>before Your face</Line>
        </Verse>
    </Track>
)

export { HereIAm }
