import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const IWillLoveYouYahweh = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_i_will_love_you_yahweh"
        {...props}
    >
        <Title>
            I Will Love You <Yahweh />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { IWillLoveYouYahweh }
