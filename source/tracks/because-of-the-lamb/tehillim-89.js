import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim89 = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:19",
            "00:27",
            "00:34",
            "00:43",
            "01:31",
            "01:39",
            "01:47",
            "02:35",
        ]}
        music="because_of_the_lamb_tehillim_89"
        {...props}
    >
        <Title>Tehillim 89</Title>
        <Verse name="one">
            <Line>
                <Labels.BecauseOfTheLamb.Tehillim89 />
            </Line>
            <Line>Forever, forever I sing</Line>
        </Verse>
        <Verse name="two">
            <Line>With my mouth I make known</Line>
            <Line>all your wonders</Line>
            <Line>Forever, forever I sing</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat name="three">
            <Line>
                I sing to you <Yahweh />
            </Line>
            <Line>You are my Elohim</Line>
            <Line>Your word is planted in my heart</Line>
            <Line>and makes me sing praises to you</Line>
            <Line>praises to you, my king</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>praises to you</Line>
            <Line>praises to you, my king</Line>
        </Verse>
    </Track>
)

export { Tehillim89 }
