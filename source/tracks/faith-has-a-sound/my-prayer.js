import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const MyPrayer = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:25",
            "00:37",
            "00:50",
            "01:01",
            "01:27",
            "01:39",
            "01:50",
            "02:39",
            "03:02",
        ]}
        music="faith_has_a_sound_my_prayer"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.MyPrayer />
        </Title>
        <Verse name="one">
            <Line>You do not want my sacrifice</Line>
            <Line>You do not want my offering</Line>
        </Verse>
        <Verse name="two">
            <Line>The only thing you ask</Line>
            <Line>is that I love you back</Line>
            <Line>the way that you first love me</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>
                Oh <Yahweh />, <Yahweh />
            </Line>
            <Line>You’re the one to whom I give my heart</Line>
            <Line>
                <Yahweh />, <Yahweh />
            </Line>
            <Line>Tell me that we’ll never be apart</Line>
        </Verse>
        <Verse>
            <Line>Why do I always run away</Line>
            <Line>Whenever you are drawing near</Line>
        </Verse>
        <Verse>
            <Line>I wanna stop and turn</Line>
            <Line>and see you face to face</Line>
            <Line>‘Cause in your presence I am changed</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>
                Oh <Yahweh />, <Yahweh />
            </Line>
            <Line>You’re the one to whom I give my heart</Line>
            <Line>
                Oh <Yahweh />, <Yahweh />
            </Line>
            <Line>Tell me that we’ll never be apart</Line>
        </Verse>
        <Verse repeat>
            <Line>Take my life, take my love</Line>
            <Line>Take all of me I give it all for you</Line>
        </Verse>
        <Repeat name="three" />
    </Track>
)

export { MyPrayer }
