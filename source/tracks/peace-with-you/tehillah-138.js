import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const Tehillah138 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_tehillah_138"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>Tehillah 138</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah138 }
