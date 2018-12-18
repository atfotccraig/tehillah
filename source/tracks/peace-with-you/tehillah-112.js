import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const Tehillah112 = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_tehillah_112"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>Tehillah 112</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillah112 }
