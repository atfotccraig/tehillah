import React from "react"
import { Line, Title, Track, Verse, Yahweh, Yahshua } from "app/components"
import Labels from "app/labels"

const TillTheMastersReturn = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:30",
            "00:47",
            "01:31",
            "01:48",
            "02:05",
            "02:49",
            "03:05",
            "03:22",
        ]}
        music="wonderful_maker_till_the_masters_return"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.TillTheMastersReturn />
        </Title>
        <Verse>
            <Line>Come and hear the sound</Line>
            <Line>of all creation singing</Line>
            <Line>Raise your voice</Line>
            <Line>and join the wondrous song</Line>
        </Verse>
        <Verse>
            <Line>We all wait</Line>
            <Line>in constant expectation</Line>
            <Line>
                for the day <Yahshua /> calls us home
            </Line>
        </Verse>
        <Verse repeat>
            <Line>We will hear, we will obey</Line>
            <Line>We will keep faith</Line>
            <Line>till the master’s return</Line>
        </Verse>
        <Verse>
            <Line>There’s a cry that echoes</Line>
            <Line>through the mighty mountains</Line>
            <Line>And resounds in breakers on the shore</Line>
        </Verse>
        <Verse>
            <Line>It is heard when the wind</Line>
            <Line>blows through the meadows</Line>
            <Line>And reflects in moonlight on the sea</Line>
        </Verse>
        <Verse repeat>
            <Line>We will stand, We will pray</Line>
            <Line>We will hold on</Line>
            <Line>till the Master’s return</Line>
        </Verse>
        <Verse>
            <Line>Day by day</Line>
            <Line>is pouring forth its worship</Line>
            <Line>Night by night</Line>
            <Line>this knowledge is revealed</Line>
        </Verse>
        <Verse>
            <Line>Now our lives</Line>
            <Line>can join the proclamation</Line>
            <Line>
                Halleluyah! <Yahweh /> reigns on high!
            </Line>
        </Verse>
        <Verse repeat>
            <Line>We will sing, we will declare</Line>
            <Line>We will cry out</Line>
            <Line>till the master’s return</Line>
        </Verse>
    </Track>
)

export { TillTheMastersReturn }
