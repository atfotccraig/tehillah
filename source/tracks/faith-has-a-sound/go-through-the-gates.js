import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const GoThroughTheGates = props => (
    <Track
        cues={[
            "00:00",
            "00:23",
            "00:35",
            "00:48",
            "01:00",
            "01:12",
            "01:24",
            "01:36",
            "01:48",
            "02:01",
            "02:25",
            "02:31",
            "02:36",
            "02:49",
            "02:55",
            "03:00",
            "03:19",
            "03:32",
            "03:44",
            "03:56",
            "04:09",
        ]}
        music="faith_has_a_sound_go_through_the_gates"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.GoThroughTheGates />
        </Title>
        <Verse name="one">
            <Line>Go through, go through the gates</Line>
            <Line>Go through, go through the gates</Line>
        </Verse>
        <Verse name="two">
            <Line>Prepare the way for the people</Line>
            <Line>Go through the gates</Line>
        </Verse>
        <Verse name="three">
            <Line>Build up, build up the way</Line>
            <Line>Build up, build up the way</Line>
        </Verse>
        <Verse name="four">
            <Line>Clear it of stones</Line>
            <Line>raise a signal for the people</Line>
            <Line>Clear the way</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse repeat name="five">
            <Line>Now sing to Zion</Line>
            <Line>Your salvation comes</Line>
        </Verse>
        <Verse name="six">
            <Line>Daughter of Zion</Line>
            <Line>behold that He comes</Line>
            <Line>He’s coming to lift up</Line>
            <Line>His daughters and sons</Line>
        </Verse>
        <Verse name="seven">
            <Line>He brings His salvation</Line>
            <Line>He brings His reward</Line>
            <Line>He is the Messiah</Line>
            <Line>the true Living Word</Line>
        </Verse>
        <Verse name="eight">
            <Line>His song goes before Him</Line>
            <Line>and this His decree</Line>
            <Line>“I’m coming to fetch you</Line>
            <Line>and bring You to me!”</Line>
        </Verse>
        <Repeat name="six" />
        <Repeat name="seven" />
        <Repeat name="eight" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
    </Track>
)

export { GoThroughTheGates }
