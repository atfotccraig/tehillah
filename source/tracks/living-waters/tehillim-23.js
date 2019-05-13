import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const Tehillim23 = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_tehillim_23"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim23 />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { Tehillim23 }
