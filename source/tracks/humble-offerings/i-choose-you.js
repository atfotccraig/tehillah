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
            <Line>I need your help again</Line>
        </Verse>
        <Verse>
            <Line>The road to where you’re leading me</Line>
            <Line>Is narrow and alone</Line>
            <Line>
                But <Yahweh /> come and take my hand
            </Line>
            <Line>I know you’ll take me home</Line>
        </Verse>
        <Verse name="one">
            <Line>And I choose you every time</Line>
            <Line>I choose you, I’m yours</Line>
            <Line>and you are mine</Line>
        </Verse>
        <Verse name="two">
            <Line>I choose you</Line>
            <Line>though my heart is breaking</Line>
            <Line>I choose you, I know you’ll mend</Line>
            <Line>the aching deep inside</Line>
        </Verse>
        <Verse name="three">
            <Line>I choose you</Line>
            <Line>I will not take another</Line>
            <Line>I choose you over family</Line>
            <Line>father, sister, brother</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse repeat>
            <Line>
                I choose you, <Yahweh /> Elohim
            </Line>
            <Line>I choose you</Line>
            <Line>to come and be my king</Line>
        </Verse>
        <Verse>
            <Line>I choose you</Line>
        </Verse>
    </Track>
)

export { IChooseYou }
