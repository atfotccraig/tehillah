import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const ABridePrepared = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_a_bridge_prepared"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.ABridePrepared />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { ABridePrepared }
