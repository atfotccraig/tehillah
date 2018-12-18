import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const ATimeForEverything = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_a_time_for_everything"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>A Time For Everything</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ATimeForEverything }
