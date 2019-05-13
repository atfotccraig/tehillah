import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const Tehillim65 = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_tehillim_65"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim65 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillim65 }
