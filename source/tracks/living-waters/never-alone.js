import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const NeverAlone = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_never_alone"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.NeverAlone />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { NeverAlone }
