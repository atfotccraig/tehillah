import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const ABridePrepared = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "00:45",
            "01:09",
            "01:31",
            "01:55",
            "02:16",
            "02:40",
            "03:02",
        ]}
        music="living_waters_a_bridge_prepared"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.ABridePrepared />
        </Title>
        <Verse repeat name="one">
            <Line>Your bride is waiting</Line>
            <Line>we’ve dressed ourselves in white</Line>
            <Line>Our lamp is burning</Line>
            <Line>in the window day and night</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>So let the oil keep burning</Line>
            <Line>Let the flame never die</Line>
            <Line>Till the Bridegroom returns for us</Line>
            <Line><Yahweh />, El Shaddai</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>And on the day You come for us</Line>
            <Line>we’ll sing and dance and praise</Line>
            <Line>For finally we’ll have the chance</Line>
            <Line>to look upon Your face</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat repeatText="x4">
            <Line>So let the oil keep burning</Line>
            <Line>Let the flame never die</Line>
            <Line>Till the Bridegroom returns for us</Line>
            <Line><Yahweh />, El Shaddai</Line>
        </Verse>
    </Track>
)

export { ABridePrepared }
