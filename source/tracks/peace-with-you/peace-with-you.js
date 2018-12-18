import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const PeaceWithYou = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_peace_with_you"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>Peace With You</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { PeaceWithYou }
