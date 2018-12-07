import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const BecauseOfTheLamb = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-because-of-the-lamb" {...props}>
        <Verse repeat>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { BecauseOfTheLamb }
