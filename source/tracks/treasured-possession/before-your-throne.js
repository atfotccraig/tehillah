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

const BeforeYourThrone = props => (
    <Track
        cues={["00:00", "00:04", "00:31", "01:23", "01:48", "02:40"]}
        music="treasured_possession_before_your_throne"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.BeforeYourThrone />
        </Title>
        <Verse>
            <Line>I come to bow before your throne</Line>
            <Line>to worship you and you alone</Line>
            <Line>I bring an offering of praise</Line>
            <Line>to you the ancient of days</Line>
        </Verse>
        <Verse repeat>
            <Line>Great and marvellous are all your works, Yah</Line>
            <Line>In righteousness and truth</Line>
            <Line>you judge our ways</Line>
            <Line>Who shall not fear you, oh master?</Line>
            <Line>And give esteem to your name?</Line>
        </Verse>
        <Verse>
            <Line>A fire flowing from your presence</Line>
            <Line>and millions stand before your throne</Line>
            <Line>You judge when all the books are opened</Line>
            <Line>destroying evil with your voice</Line>
        </Verse>
        <Verse repeat>
            <Line>Every knee will come and bow before you</Line>
            <Line>For your righteousness has been revealed</Line>
            <Line>Oh king of the set-apart ones</Line>
            <Line>
                <Yahweh /> of hosts, you are praised
            </Line>
        </Verse>
        <Verse repeat>
            <Line>I come to bow before your throne</Line>
            <Line>to worship you and you alone</Line>
            <Line>I bring an offering of praise</Line>
            <Line>to you the ancient of days</Line>
        </Verse>
    </Track>
)

export { BeforeYourThrone }
