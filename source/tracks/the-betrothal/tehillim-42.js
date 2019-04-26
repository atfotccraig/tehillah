import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim42 = props => (
    <Track
        cues={[
            "00:00",
            "00:01",
            "00:21",
            "00:35",
            "00:41",
            "00:58",
            "01:20",
            "01:50",
            "01:58",
            "02:12",
        ]}
        music="the_betrothal_tehillim_42"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.Tehillim42 />
        </Title>
        <Verse>
            <Line>Why are you downcast, oh my soul?</Line>
            <Line>Why are you downcast, oh my soul?</Line>
        </Verse>
        <Verse repeat>
            <Line>
                Hope in <Yahweh />
            </Line>
            <Line>
                Hope in <Yahweh />
            </Line>
            <Line>and you will never be ashamed</Line>
        </Verse>
        <Verse>
            <Line>And you will never be ashamed</Line>
        </Verse>
        <Verse>
            <Line>As the deer it longs</Line>
            <Line>for the water streams</Line>
            <Line>So my being longs</Line>
            <Line>for You, oh Elohim</Line>
        </Verse>
        <Verse repeat>
            <Line>My being longs, for Elohim</Line>
        </Verse>
        <Verse repeat>
            <Line>
                By day <Yahweh /> gives loving-commitment
            </Line>
            <Line>By night His song is with me</Line>
            <Line>
                I lift my voice to <Yahweh /> my stronghold
            </Line>
            <Line>A prayer to the El of my life</Line>
        </Verse>
        <Verse repeat>
            <Line>A prayer to the El of my life</Line>
        </Verse>
        <Verse>
            <Line>
                By day <Yahweh /> gives loving-commitment
            </Line>
            <Line>By night His song is with me</Line>
            <Line>
                I lift my voice to <Yahweh /> my stronghold
            </Line>
            <Line>A prayer to the El of my life</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>A prayer to the El of my life</Line>
        </Verse>
    </Track>
)

export { Tehillim42 }
