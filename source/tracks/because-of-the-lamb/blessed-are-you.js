import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const BlessedAreYou = props => (
    <Track
        cues={["00:05"]}
        music="because-of-the-lamb-blessed-are-you"
        {...props}
    >
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { BlessedAreYou }
