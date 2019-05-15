import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim96 = props => (
    <Track
        cues={[
            "00:00",
            "00:08",
            "00:25",
            "00:41",
            "00:57",
            "01:13",
            "01:30",
            "01:46",
            "02:02",
        ]}
        music="living_waters_tehillim_96"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim96 />
        </Title>
        <Verse repeat name="one">
            <Line>Sing to <Yahweh /> a new song</Line>
            <Line>Sing to <Yahweh /> a new song</Line>
            <Line>Sing to <Yahweh /> all the earth</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>Sing to <Yahweh /></Line>
            <Line>Bless His Name</Line>
            <Line>Proclaim His deliverance</Line>
            <Line>from day to day</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { Tehillim96 }
