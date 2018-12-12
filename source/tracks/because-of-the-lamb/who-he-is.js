import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const WhoHeIs = props => (
    <Track cues={["00:05"]} music="because_of_the_lamb_who_he_is" {...props}>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhoHeIs }
