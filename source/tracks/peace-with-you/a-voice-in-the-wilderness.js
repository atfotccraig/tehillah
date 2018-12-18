import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const AVoiceInTheWilderness = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_a_voice_in_the_wilderness"
        {...props}
    >
        <Title>A Voice In The Wilderness</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { AVoiceInTheWilderness }
