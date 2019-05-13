import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const Shemoth = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_shemoth"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Shemoth />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Shemoth }
