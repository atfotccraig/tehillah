import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YahwehWhoMovesMountains = props => (
    <Track cues={["00:05"]} music="because-of-the-lamb-yahweh-who-moves-mountains" {...props}>
        <Verse repeat>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YahwehWhoMovesMountains }
