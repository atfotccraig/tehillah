import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Refuge = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:35",
            "00:46",
            "00:57",
            "01:07",
            "01:32",
            "01:53",
            "02:14",
            "02:37",
            "02:59",
            "03:20",
        ]}
        music="true_worship_refuge"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.Refuge />
        </Title>
        <Verse name="one">
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> saviour, of a woman born, and I say
            </Line>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> saviour, of a woman born
            </Line>
        </Verse>
        <Verse>
            <Line>I cry aloud</Line>
            <Line>and in your loving mercy </Line>
            <Line>you answered me</Line>
        </Verse>
        <Verse>
            <Line>I reach for you</Line>
            <Line>in times of trouble</Line>
            <Line>you are not far from me</Line>
        </Verse>
        <Verse>
            <Line>My light, my song</Line>
            <Line>You lift me up</Line>
            <Line>You do not abandon me</Line>
            <Line>‘Cause you’re my...</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>
                Your invitation comes to my heart, <Yahweh />
            </Line>
            <Line>You’re asking me to seek your face</Line>
            <Line>
                I’ll seek your face with all that I am, <Yahweh />
            </Line>
            <Line>now come and meet me in this place</Line>
        </Verse>
        <Verse>
            <Line>
                Your invitation comes to my heart, <Yahweh />
            </Line>
            <Line>You’re asking me to seek your face</Line>
            <Line>
                I’ll seek your face with all that I am, <Yahweh />
            </Line>
            <Line>now come and meet me in this place</Line>
            <Line>‘Cause you’re my...</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>
                There’s one thing that I ask of you now, <Yahweh />
            </Line>
            <Line>The thing that I will always pursue</Line>
            <Line>
                Forever just to dwell in your house, <Yahweh />
            </Line>
            <Line>eternally to be with you</Line>
        </Verse>
        <Verse>
            <Line>
                There’s one thing that I ask of you now, <Yahweh />
            </Line>
            <Line>The thing that I will always pursue</Line>
            <Line>
                Forever just to dwell in your house, <Yahweh />
            </Line>
            <Line>eternally to be with you</Line>
            <Line>‘Cause you’re my...</Line>
        </Verse>
        <Verse repeat>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> saviour, of a woman born, and I say
            </Line>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> saviour, of a woman born
            </Line>
        </Verse>
    </Track>
)

export { Refuge }
