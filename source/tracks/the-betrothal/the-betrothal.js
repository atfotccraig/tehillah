import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const TheBetrothal = props => (
    <Track
        cues={[
            "00:00",
            "00:02",
            "00:27",
            "00:50",
            "01:14",
            "01:38",
            "02:03",
            "02:26",
            "02:48",
            "03:11",
        ]}
        music="the_betrothal_the_betrothal"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.TheBetrothal />
        </Title>
        <Verse>
            <Line>Behold My beloved</Line>
            <Line>Let Me allure you to the wilderness</Line>
            <Line>There I will speak</Line>
            <Line>tender words to your heart</Line>
            <Line>and lead you to your inheritance</Line>
        </Verse>
        <Verse name="one">
            <Line>The time is here, the time is now</Line>
            <Line>and I have led you through the wilderness</Line>
            <Line>The time is here, the time is now</Line>
            <Line>and I have clothed Myself in brightness</Line>
        </Verse>
        <Verse name="two">
            <Line>And I’ll betroth you as a bride</Line>
            <Line>as a bride unto Me forever</Line>
            <Line>And I’ll betroth you as a bride</Line>
            <Line>as a bride in righteousness</Line>
        </Verse>
        <Verse name="three">
            <Line>And in right-ruling and compassion</Line>
            <Line>I’ll betroth you as a bride</Line>
            <Line>
                And you will know Me, bride of <Yahweh />
            </Line>
            <Line>Forevermore you’ll be by My side</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Let me be Your bride forever</Line>
            <Line>Let me follow where You lead me</Line>
            <Line>You alone shall be my first love</Line>
            <Line>No one else could capture my heart</Line>
        </Verse>
        <Verse>
            <Line>Though I stumbled</Line>
            <Line>in the path before this</Line>
            <Line>Now Your love redeemed and cleansed me</Line>
            <Line>Come beloved I am ready</Line>
            <Line>Evermore to be by Your side</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
    </Track>
)

export { TheBetrothal }
