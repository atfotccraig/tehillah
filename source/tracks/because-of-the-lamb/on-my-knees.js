import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const OnMyKnees = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-on-my-knees" {...props}>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { OnMyKnees }
