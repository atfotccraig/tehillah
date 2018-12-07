import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YomKippur = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-yom-kippur" {...props}>
        <Verse repeat>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YomKippur }
