import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const PraiseYahwehInTheLightOfTheFire = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="pleasing_you_praise_yahweh_in_the_light_of_the_fire"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.PraiseYahwehInTheLightOfTheFire />
        </Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { PraiseYahwehInTheLightOfTheFire }
