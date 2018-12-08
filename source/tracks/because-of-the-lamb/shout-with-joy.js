import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const ShoutWithJoy = props => (
    <Track
        cues={["00:05"]}
        music="because-of-the-lamb-shout-with-joy"
        {...props}
    >
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ShoutWithJoy }
