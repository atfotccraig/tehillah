import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const WhatYouveDone = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_what_youve_done"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.WhatYouveDone />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { WhatYouveDone }
