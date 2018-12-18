import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const TheRockThatIStandOn = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_the_rock_that_i_stand_on"
        {...props}
    >
        <Title>The Rock That I Stand On</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { TheRockThatIStandOn }
