import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const YomKippur = props => (
    <Track cues={["00:05"]} music="because_of_the_lamb_yom_kippur" {...props}>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YomKippur }
