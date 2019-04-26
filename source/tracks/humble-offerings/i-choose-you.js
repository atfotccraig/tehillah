import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const IChooseYou = props => (
    <Track
        cues={[
            "00:00",
            "00:25",
            "00:38",
            "00:50",
            "01:02",
            "01:15",
            "01:27",
            "01:39",
            "01:51",
            "02:03",
            "02:27",
        ]}
        music="humble_offerings_i_choose_you"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.IChooseYou />
        </Title>
        <Verse>
            <Line>I’m presented with a choice to make</Line>
            <Line>time and time again</Line>
            <Line>And though I know what I should do</Line>
            <Line>I need Your help again</Line>
        </Verse>
        <Verse>
            <Line>The road to where You’re leading me</Line>
            <Line>Is narrow and alone</Line>
            <Line>
                But <Yahweh /> come and take my hand
            </Line>
            <Line>I know You’ll take me home</Line>
        </Verse>
        <Verse name="one">
            <Line>And I choose You every time</Line>
            <Line>I choose You, I’m Yours</Line>
            <Line>and You are mine</Line>
        </Verse>
        <Verse name="two">
            <Line>I choose You</Line>
            <Line>though my heart is breaking</Line>
            <Line>I choose You, I know You’ll mend</Line>
            <Line>the aching deep inside</Line>
        </Verse>
        <Verse name="three">
            <Line>I choose You</Line>
            <Line>I will not take another</Line>
            <Line>I choose You over family</Line>
            <Line>father, sister, brother</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat>
            <Line>
                I choose You, <Yahweh /> Elohim
            </Line>
            <Line>I choose You</Line>
            <Line>to come and be my King</Line>
        </Verse>
        <Verse>
            <Line>I choose You</Line>
        </Verse>
    </Track>
)

export { IChooseYou }
