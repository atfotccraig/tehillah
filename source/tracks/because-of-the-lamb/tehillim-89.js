import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim89 = props => (
    <Track
        cues={["00:00", "00:11", "00:43", "01:31", "01:47", "02:35"]}
        music="because_of_the_lamb_tehillim_89"
        {...props}
    >
        <Title>
            <Labels.BecauseOfTheLamb.Tehillim89 />
        </Title>
        <Verse repeat>
            <Line>
                I sing of the kindness of <Yahweh />
            </Line>
            <Line>Forever, forever I sing</Line>
            <Line>With my mouth I make known</Line>
            <Line>all Your wonders</Line>
            <Line>Forever, forever I sing</Line>
        </Verse>
        <Verse name="one" repeat>
            <Line>
                I sing to You <Yahweh />, You are my Elohim
            </Line>
            <Line>Your word is planted in my heart</Line>
            <Line>and makes me sing praises to You</Line>
            <Line>praises to You, my King</Line>
        </Verse>
        <Verse>
            <Line>
                I sing of the kindness of <Yahweh />
            </Line>
            <Line>Forever, forever I sing</Line>
            <Line>With my mouth I make known</Line>
            <Line>all Your wonders</Line>
            <Line>Forever, forever I sing</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>praises to You</Line>
            <Line>praises to You, my King</Line>
        </Verse>
    </Track>
)

export { Tehillim89 }
