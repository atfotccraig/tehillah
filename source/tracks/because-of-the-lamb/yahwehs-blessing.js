import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YahwehsBlessing = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-yahwehs-blessing" {...props}>
        <Verse repeat>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YahwehsBlessing }
