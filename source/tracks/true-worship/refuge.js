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
                <Yahweh /> Saviour, of a woman born, and I say
            </Line>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> Saviour, of a woman born
            </Line>
        </Verse>
        <Verse>
            <Line>I cry aloud</Line>
            <Line>and in Your loving mercy </Line>
            <Line>You answered me</Line>
        </Verse>
        <Verse>
            <Line>I reach for You</Line>
            <Line>in times of trouble</Line>
            <Line>You are not far from me</Line>
        </Verse>
        <Verse>
            <Line>My light, my song</Line>
            <Line>You lift me up</Line>
            <Line>You do not abandon me</Line>
            <Line>‘Cause You’re my...</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>
                Your invitation comes to my heart, <Yahweh />
            </Line>
            <Line>You’re asking me to seek Your face</Line>
            <Line>
                I’ll seek Your face with all that I am, <Yahweh />
            </Line>
            <Line>now come and meet me in this place</Line>
        </Verse>
        <Verse>
            <Line>
                Your invitation comes to my heart, <Yahweh />
            </Line>
            <Line>You’re asking me to seek Your face</Line>
            <Line>
                I’ll seek Your face with all that I am, <Yahweh />
            </Line>
            <Line>now come and meet me in this place</Line>
            <Line>‘Cause You’re my...</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>
                There’s one thing that I ask of You now, <Yahweh />
            </Line>
            <Line>The thing that I will always pursue</Line>
            <Line>
                Forever just to dwell in Your house, <Yahweh />
            </Line>
            <Line>eternally to be with You</Line>
        </Verse>
        <Verse>
            <Line>
                There’s one thing that I ask of You now, <Yahweh />
            </Line>
            <Line>The thing that I will always pursue</Line>
            <Line>
                Forever just to dwell in Your house, <Yahweh />
            </Line>
            <Line>eternally to be with You</Line>
            <Line>‘Cause You’re my...</Line>
        </Verse>
        <Verse repeat>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> Saviour, of a woman born, and I say
            </Line>
            <Line>Refuge, stronghold, shelter from the storm</Line>
            <Line>
                <Yahweh /> Saviour, of a woman born
            </Line>
        </Verse>
    </Track>
)

export { Refuge }
