import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const RejoiceInTheLamb = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:56",
            "01:35",
            "01:53",
            "02:30",
            "03:07",
            "03:44",
        ]}
        music="pleasing_you_rejoice_in_the_lamb"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.RejoiceInTheLamb />
        </Title>
        <Verse name="one">
            <Line>From the mountains to the valleys</Line>
            <Line>From the ocean to the sky</Line>
            <Line>From the east side to the west side</Line>
            <Line>There is one song that I cry</Line>
        </Verse>
        <Verse name="two" repeat>
            <Line>Can you see, do you hear</Line>
            <Line>
                that <Yahweh /> is on high?
            </Line>
            <Line>Do you know, can you feel</Line>
            <Line>that His word is alive?</Line>
        </Verse>
        <Verse>
            <Line>Rejoice in the lamb</Line>
            <Line>who paid the price</Line>
            <Line>Rejoice in the perfect sacrifice</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>Rejoice in the lamb</Line>
            <Line>who paid the price</Line>
            <Line>Rejoice in the perfect sacrifice</Line>
        </Verse>
        <Verse>
            <Line>Rejoice</Line>
        </Verse>
    </Track>
)

export { RejoiceInTheLamb }
