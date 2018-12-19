import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"

const IWillLoveYouYahweh = props => (
    <Track
        cues={[
            "00:00",
            "00:17",
            "00:32",
            "00:45",
            "01:14",
            "01:29",
            "01:42",
            "01:57",
            "02:11",
            "02:25",
            "02:40",
        ]}
        music="peace_with_you_i_will_love_you_yahweh"
        {...props}
    >
        <Title>
            I Will Love You <Yahweh />
        </Title>
        <Verse>
            <Line>
                I called upon <Yahweh /> and He heard my cry
            </Line>
            <Line>He bowed the heavens and came down</Line>
        </Verse>
        <Verse>
            <Line>He flew upon the wind</Line>
            <Line>and took me in His hand</Line>
            <Line>He brought me into His loving arms</Line>
        </Verse>
        <Verse>
            <Line>
                I will love You <Yahweh /> with all that I am
            </Line>
            <Line>
                I will love You <Yahweh /> with my heart
            </Line>
            <Line>my being, my strength</Line>
        </Verse>
        <Verse>
            <Line>You are my rock, my stronghold</Line>
            <Line>and my high tower</Line>
        </Verse>
        <Verse>
            <Line>You gird me with strength</Line>
            <Line>and make my way perfect</Line>
        </Verse>
        <Verse name="one">
            <Line>
                <Yahweh /> lives! And blessed is my rock
            </Line>
            <Line>You lift me up and keep me safe</Line>
        </Verse>
        <Verse name="two">
            <Line>
                <Yahweh /> lives! And blessed is my rock
            </Line>
            <Line>My being praises You</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>
                I will love You <Yahweh /> with all that I am
            </Line>
            <Line>
                I will love You <Yahweh /> with my heart
            </Line>
            <Line>my being, my strength</Line>
        </Verse>
    </Track>
)

export { IWillLoveYouYahweh }
