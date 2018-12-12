import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YahwehWhoMovesMountains = props => (
    <Track
        cues={["00:05"]}
        music="because_of_the_lamb_yahweh_who_moves_mountains"
        {...props}
    >
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YahwehWhoMovesMountains }
