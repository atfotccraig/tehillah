import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const AbideInMe = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "01:02",
            "01:24",
            "01:47",
            "02:10",
            "02:32",
            "02:55",
            "03:18",
            "03:43",
        ]}
        music="refined_abide_in_me"
        {...props}
    >
        <Title>
            <Labels.Refined.AbideInMe />
        </Title>
        <Verse repeat>
            <Line>Give ear, oh ear and hear</Line>
            <Line>Open your eyes and see</Line>
            <Line>
                I am <Yahweh /> your Elohim
            </Line>
            <Line>Walk before Me and be perfect</Line>
        </Verse>
        <Verse name="one">
            <Line>Let not your heart grow faint</Line>
            <Line>Seek first My kingdom</Line>
            <Line>Let not your heart grow faint</Line>
            <Line>and I’ll take care of the rest</Line>
        </Verse>
        <Verse name="two">
            <Line>My love for you is everlasting</Line>
            <Line>Draw close to Me in loving-kindness</Line>
            <Line>Abide in Me, I’ll give you peace</Line>
            <Line>Beloved put your trust in Me</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>
                I am <Yahweh /> your Elohim
            </Line>
            <Line>Walk before NMe and be perfect</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>Give ear, oh ear and hear</Line>
            <Line>Open your eyes and see</Line>
            <Line>
                I am <Yahweh /> your Elohim
            </Line>
            <Line>Beloved put your trust in Me</Line>
        </Verse>
    </Track>
)

export { AbideInMe }
