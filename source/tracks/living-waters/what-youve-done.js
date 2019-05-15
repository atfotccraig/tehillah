import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const WhatYouveDone = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "00:48",
            "01:13",
            "02:01",
            "02:25",
            "02:50",
        ]}
        music="living_waters_what_youve_done"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.WhatYouveDone />
        </Title>
        <Verse name="one">
            <Line>You brought me out</Line>
            <Line>You took my shame</Line>
            <Line>You rescued me</Line>
            <Line>You gave me Your Name</Line>
        </Verse>
        <Verse name="two">
            <Line>You brought me out</Line>
            <Line>You took my shame</Line>
            <Line>You rescued me</Line>
            <Line>I’ll never be the same</Line>
        </Verse>
        <Verse repeat>
            <Line>And I will sing</Line>
            <Line>And I’ll declare</Line>
            <Line>The wonders of <Yahweh /></Line>
            <Line>To nations everywhere</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>And I will sing</Line>
            <Line>And I’ll declare</Line>
            <Line>The wonders of <Yahweh /></Line>
            <Line>To nations everywhere</Line>
        </Verse>
    </Track>
)

export { WhatYouveDone }
