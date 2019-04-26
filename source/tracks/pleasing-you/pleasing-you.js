import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const PleasingYou = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:51",
            "01:22",
            "01:54",
            "02:26",
            "02:57",
            "04:16",
        ]}
        music="pleasing_you_pleasing_you"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.PleasingYou />
        </Title>
        <Verse repeat>
            <Line>May the words of my</Line>
            <Line>mouth always please You</Line>
            <Line>May the fruit of my life do the same</Line>
            <Line>So many declare that they know You</Line>
            <Line>but their actions deny and profane</Line>
        </Verse>
        <Verse repeat>
            <Line>There is One who knows me</Line>
            <Line>down to my deepest intent</Line>
            <Line>He is worthy, righteous</Line>
            <Line>His love will never relent</Line>
        </Verse>
        <Verse name="one">
            <Line>I will worship You</Line>
            <Line>I will live my life to please You</Line>
            <Line>I will praise You</Line>
            <Line>Every breath I take is to honour You</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah, hoshianah</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat repeatText="x5">
            <Line>Halleluyah, hoshianah</Line>
        </Verse>
        <Verse repeat>
            <Line>{"Hoshianah, Hoshianah"}</Line>
            <Line>
                {"baruḵ haba bashem"} <Yahweh />
            </Line>
        </Verse>
    </Track>
)

export { PleasingYou }
