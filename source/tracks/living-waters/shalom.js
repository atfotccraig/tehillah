import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const Shalom = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:34",
            "00:43",
            "00:51",
            "01:07",
            "01:15",
            "01:23",
            "01:39",
            "01:47",
            "01:55",
            "02:11",
            "02:19",
            "02:27",
        ]}
        music="living_waters_shalom"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Shalom />
        </Title>
        <Verse repeat name="one">
            <Line>Shalom to you, shalom to you</Line>
            <Line>Come enter in</Line>
            <Line>and dwell in My shalom</Line>
        </Verse>
        <Verse name="two">
            <Line>We’re walking in this world</Line>
            <Line>that’s full of cares and strife</Line>
            <Line>We’re walking in this world</Line>
            <Line>day to day</Line>
        </Verse>
        <Verse name="three">
            <Line>We’re walking in this world</Line>
            <Line>we’re seeking after life</Line>
            <Line>And as we’re drawing near</Line>
            <Line>we hear You say</Line>
        </Verse>
        <Repeat name="one" />
        <Verse name="four">
            <Line>The time is drawing near</Line>
            <Line>we’re hastening the day</Line>
            <Line>The time is drawing near</Line>
            <Line>for You to come</Line>
        </Verse>
        <Verse name="five">
            <Line>The time is drawing near</Line>
            <Line>the Bridegroom’s on His way</Line>
            <Line>The Spirit and the Bride</Line>
            <Line>will both say ‘Come!’</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat repeatText="x4">
            <Line>Shalom to you, shalom to you</Line>
            <Line>Come enter in</Line>
            <Line>and dwell in My shalom</Line>
        </Verse>
    </Track>
)

export { Shalom }
