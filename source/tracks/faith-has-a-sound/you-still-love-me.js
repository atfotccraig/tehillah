import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YouStillLoveMe = props => (
    <Track
        cues={[
            "00:00",
            "00:07",
            "00:26",
            "00:33",
            "00:52",
            "01:05",
            "01:39",
            "01:57",
            "02:04",
            "02:23",
            "02:36",
            "02:55",
        ]}
        music="faith_has_a_sound_you_still_love_me"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.YouStillLoveMe />
        </Title>
        <Verse name="one">
            <Line>You, You took me out</Line>
            <Line>You, You set me free</Line>
            <Line>You washed me clean</Line>
            <Line>How can it be?</Line>
        </Verse>
        <Verse>
            <Line>You still love me</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat>
            <Line>You still love me</Line>
        </Verse>
        <Verse>
            <Line>It would have been enough to be</Line>
            <Line>to live a life completely set free</Line>
            <Line>But above all that, You still bless me</Line>
            <Line>You still bless me, You still bless me</Line>
        </Verse>
        <Verse name="two">
            <Line>Everywhere that I turn</Line>
            <Line>everything that I see</Line>
            <Line>My husband’s eyes always on me</Line>
        </Verse>
        <Verse>
            <Line>How You care for me</Line>
        </Verse>
        <Repeat name="two" />
        <Verse repeat>
            <Line>How You care for me</Line>
        </Verse>
        <Verse>
            <Line>Your love will everlasting be</Line>
            <Line>I just can’t wait to see</Line>
            <Line>when You return for me</Line>
            <Line>For, after all, You still love me</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>You still love me</Line>
        </Verse>
    </Track>
)

export { YouStillLoveMe }
