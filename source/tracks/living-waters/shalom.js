import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const Shalom = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_shalom"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Shalom />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Shalom }
