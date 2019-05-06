import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
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
            <Line>I come to bow before Your throne</Line>
            <Line>to worship You and You alone</Line>
            <Line>I bring an offering of praise</Line>
            <Line>to You the Ancient of Days</Line>
        </Verse>
        <Verse repeat>
            <Line>Great and marvellous are all Your works, Yah</Line>
            <Line>In righteousness and truth</Line>
            <Line>You judge our ways</Line>
            <Line>Who shall not fear You, oh Master?</Line>
            <Line>and give esteem to Your Name?</Line>
        </Verse>
        <Verse>
            <Line>A fire flowing from Your presence</Line>
            <Line>and millions stand before Your throne</Line>
            <Line>You judge when all the books are opened</Line>
            <Line>destroying evil with Your voice</Line>
        </Verse>
        <Verse repeat>
            <Line>Every knee will come and bow before You</Line>
            <Line>For Your righteousness has been revealed</Line>
            <Line>Oh King of the set-apart ones</Line>
            <Line>
                <Yahweh /> of hosts, You are praised
            </Line>
        </Verse>
        <Verse repeat>
            <Line>I come to bow before Your throne</Line>
            <Line>to worship You and You alone</Line>
            <Line>I bring an offering of praise</Line>
            <Line>to You the Ancient of Days</Line>
        </Verse>
    </Track>
)

export { BeforeYourThrone }
