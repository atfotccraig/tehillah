import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const YourLove = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_your_love"
        {...props}
    >
        <Title contributors={["The Stevensons"]}>Your Love</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { YourLove }
