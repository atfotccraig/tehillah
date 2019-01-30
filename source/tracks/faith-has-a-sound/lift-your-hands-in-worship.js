import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const LiftYourHandsInWorship = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "01:08",
            "01:54",
            "02:17",
            "03:00",
            "03:45",
            "04:28",
        ]}
        music="faith_has_a_sound_lift_your_hands_in_worship"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.LiftYourHandsInWorship />
        </Title>
        <Verse repeat>
            <Line>It is good and it is righteous</Line>
            <Line>
                to give praise to <Yahweh />
            </Line>
            <Line>So let all of creation</Line>
            <Line>hear this song today</Line>
        </Verse>
        <Verse repeat repeatText="x4" name="one">
            <Line>Lift your hands in worship</Line>
            <Line>Sing unto Almighty</Line>
            <Line>for He is worthy of all praise</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah!</Line>
            <Line>Halleluyah!</Line>
            <Line>Halleluyah!</Line>
        </Verse>
        <Verse repeat>
            <Line>Every knee will bow before Him</Line>
            <Line>and every tongue confess</Line>
            <Line>
                that <Yahweh /> is the only
            </Line>
            <Line>and Him alone we bless</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat repeatText="x4">
            <Line>Halleluyah!</Line>
            <Line>Halleluyah!</Line>
            <Line>Halleluyah!</Line>
        </Verse>
        <Verse repeat>
            <Line>Lift your hands in worship</Line>
            <Line>Sing unto Almighty</Line>
            <Line>for He is worthy of all praise</Line>
        </Verse>
    </Track>
)

export { LiftYourHandsInWorship }
