import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const WhoHeIs = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-who-he-is" {...props}>
        <Verse repeat>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhoHeIs }
