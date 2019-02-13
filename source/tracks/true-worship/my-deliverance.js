import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const MyDeliverance = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:35",
            "00:52",
            "01:15",
            "01:38",
            "02:00",
            "02:23",
            "02:56",
        ]}
        music="true_worship_my_deliverance"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.MyDeliverance />
        </Title>
        <Verse name="one" repeat repeatText="x4">
            <Line>El is my deliverance</Line>
            <Line>I trust and I am not afraid</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahweh />, my strength and my song
            </Line>
            <Line>
                <Yahweh />, I love you alone
            </Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>And I will draw water with joy</Line>
            <Line>from the fountains of salvation</Line>
            <Line>On that day I will declare</Line>
            <Line>“Praise Him all of creation!”</Line>
        </Verse>
        <Verse>
            <Line>Make His deeds known in the earth</Line>
            <Line>and make His Name exalted</Line>
            <Line>Cry aloud, oh shout for joy</Line>
            <Line>For on the throne He’s seated</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat>
            <Line>
                <Yahweh />, my strength and my song
            </Line>
            <Line>
                <Yahweh />, I love you alone
            </Line>
        </Verse>
        <Verse repeat repeatText="x7">
            <Line>El is my deliverance</Line>
            <Line>I trust and I am not afraid</Line>
        </Verse>
    </Track>
)

export { MyDeliverance }
