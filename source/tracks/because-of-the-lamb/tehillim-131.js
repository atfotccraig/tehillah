import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const Tehillim131 = props => (
    <Track
        cues={["00:00", "00:14", "00:38", "01:03", "01:28", "01:54", "02:43"]}
        music="because_of_the_lamb_tehillim_131"
        {...props}
    >
        <Title contributors={["M. Rheeder", "C. Stevenson"]}>
            Tehillim 131
        </Title>
        <Verse name="one">
            <Line>
                <Yahweh />, my heart is not lifted up
            </Line>
            <Line>My eyes are not raised too high</Line>
            <Line>I do not occupy myself</Line>
            <Line>with things too great</Line>
            <Line>and too marvellous for me</Line>
        </Verse>
        <Verse name="two">
            <Line>But I have calmed and quieted my soul</Line>
            <Line>Like a weaned child with its mother</Line>
            <Line>Like a weaned child is my soul</Line>
            <Line>Is my soul within me</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>
                Oh Israel, hope in <Yahweh />
            </Line>
            <Line>
                Oh Israel, hope in <Yahweh />
            </Line>
            <Line>
                Oh Israel, hope in <Yahweh />
            </Line>
            <Line>From this time and forevermore</Line>
        </Verse>
        <Verse repeat>
            <Line>From this time and forevermore</Line>
        </Verse>
    </Track>
)

export { Tehillim131 }
