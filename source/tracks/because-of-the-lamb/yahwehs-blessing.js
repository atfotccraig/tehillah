import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YahwehsBlessing = props => (
    <Track
        cues={["00:05"]}
        music="because_of_the_lamb_yahwehs_blessing"
        {...props}
    >
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YahwehsBlessing }
