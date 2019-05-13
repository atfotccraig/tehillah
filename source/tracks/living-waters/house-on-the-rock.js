import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh, Yahshua, Yisrael } from "app/components"
import Labels from "app/labels"

const HouseOnTheRock = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
        ]}
        music="living_waters_house_on_the_rock"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.HouseOnTheRock />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { HouseOnTheRock }
