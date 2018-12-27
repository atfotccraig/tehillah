import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah92 = props => (
    <Track
        cues={[
            "00:00",
            "00:08",
            "00:26",
            "00:46",
            "01:06",
            "01:25",
            "01:44",
            "02:03",
            "02:23",
            "02:42",
            "03:01",
            "03:20",
        ]}
        music="treasured_possession_tehillah_92"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.Tehillah92 />
        </Title>
        <Verse name="one">
            <Line>
                It is good to give thanks to <Yahweh />
            </Line>
            <Line>Sing praises to Him, most high</Line>
            <Line>Recount daily His loving-commitment</Line>
            <Line>and each night His trustworthiness</Line>
        </Verse>
        <Verse name="two">
            <Line>You have made me rejoice</Line>
            <Line>with your work, Yah</Line>
            <Line>Shout for joy at the works of your hands</Line>
            <Line>How marvellous is all you do</Line>
            <Line>Your thoughts unsearchable</Line>
        </Verse>
        <Verse name="three">
            <Line>A fool will never understand</Line>
            <Line>His wickedness destroyed</Line>
            <Line>But you lift up my horn like an ox</Line>
            <Line>and anoint me with fresh oil</Line>
        </Verse>
        <Verse name="four">
            <Line>
                Those who are planted in <Yahweh />
                ’s house
            </Line>
            <Line>flourish in His courts</Line>
            <Line>They still bear fruit in latter years</Line>
            <Line>They’re always fresh and green</Line>
        </Verse>
        <Verse name="five">
            <Line>Their lives declare His uprightness</Line>
            <Line>Our rock and our righteousness</Line>
            <Line>
                So always give thanks to <Yahweh />
            </Line>
            <Line>Sing praises to Him, most high</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse>
            <Line>
                So always give thanks to <Yahweh />
            </Line>
            <Line>Sing praises to Him, most high</Line>
        </Verse>
    </Track>
)

export { Tehillah92 }
