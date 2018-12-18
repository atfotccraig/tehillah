import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const IAmFree = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_i_am_free"
        {...props}
    >
        <Title>I Am Free</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IAmFree }
