import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim134 = props => (
    <Track
        cues={[
            "00:00",
            "00:21",
            "00:43",
            "01:03",
            "01:14",
            "01:34",
            "01:55",
            "02:08",
            "02:26",
            "02:32",
            "02:50",
            "03:14",
            "03:32",
            "03:38",
            "03:57",
        ]}
        music="living_waters_tehillim_134"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim134 />
        </Title>
        <Verse repeat name="one">
            <Line>Come bless <Yahweh /></Line>
            <Line>Come bless <Yahweh /></Line>
            <Line>all you servants of <Yahweh /></Line>
        </Verse>
        <Verse repeat name="two">
            <Line>You who stand by night</Line>
            <Line>who stand by night in the house of <Yahweh /></Line>
        </Verse>
        <Verse name="three">
            <Line>Lift up your hands</Line>
            <Line>in the Set-Apart Place</Line>
            <Line>and bless <Yahweh /></Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat repeatText="x3" name="four">
            <Line>May <Yahweh /> bless you from Zion</Line>
        </Verse>
        <Verse name="five">
            <Line>He who made heaven and earth</Line>
        </Verse>
        <Repeat name="four" />
        <Verse repeat>
            <Line>He who made, He who made</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="four" />
        <Repeat name="five" />
    </Track>
)

export { Tehillim134 }
