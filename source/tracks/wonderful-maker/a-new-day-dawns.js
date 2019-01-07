import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ANewDayDawns = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:25",
            "00:34",
            "00:51",
            "01:09",
            "01:44",
            "02:18",
            "02:35",
            "02:52",
            "03:27",
            "04:19",
        ]}
        music="wonderful_maker_a_new_day_dawns"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.ANewDayDawns />
        </Title>
        <Verse>
            <Line>Can you see the new day</Line>
            <Line>as it dawns upon us?</Line>
            <Line>Can you feel the hope</Line>
            <Line>as it is rising on us?</Line>
        </Verse>
        <Verse>
            <Line>Can you see the mountains</Line>
            <Line>that are trembling, shaking?</Line>
            <Line>Can you taste the vict’ry</Line>
            <Line>in each step we’re taking?</Line>
        </Verse>
        <Verse name="one">
            <Line>Now is the time</Line>
            <Line>to stand and to be counted</Line>
            <Line>The kingdom is near to everyone</Line>
            <Line>who calls upon His name</Line>
        </Verse>
        <Verse name="two">
            <Line>Now is the time</Line>
            <Line>the trumpet has resounded</Line>
            <Line>Let all the earth finally see</Line>
            <Line>His wonder and His fame</Line>
        </Verse>
        <Verse repeat name="three">
            <Line>We are all</Line>
            <Line>the children of the light</Line>
            <Line>Our Elohim is rising up</Line>
            <Line>and coming in His might</Line>
        </Verse>
        <Verse repeat>
            <Line>Hosanna! The king is on His way!</Line>
            <Line>Hosanna! Prepare your heart today!</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat repeatText="x3">
            <Line>Hosanna! The king is on His way!</Line>
            <Line>Hosanna! Prepare your heart today!</Line>
        </Verse>
        <Verse>
            <Line>Hosanna!</Line>
        </Verse>
    </Track>
)

export { ANewDayDawns }
