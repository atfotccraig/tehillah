import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Halleluyah = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:24",
            "00:36",
            "00:48",
            "01:01",
            "01:25",
            "02:12",
            "02:24",
            "02:39",
            "04:32",
        ]}
        music="true_worship_halleluyah"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.Halleluyah />
        </Title>
        <Verse>
            <Line>If I were just to see</Line>
            <Line>one glimpse of Your majesty</Line>
            <Line>my life would never be the same</Line>
        </Verse>
        <Verse>
            <Line>If I could only understand</Line>
            <Line>the wonder of Your face</Line>
            <Line>the splendour of Your Name</Line>
        </Verse>
        <Verse>
            <Line>Then I would fall down on my knees</Line>
            <Line>my mouth would open wide</Line>
            <Line>and out would flow this song</Line>
        </Verse>
        <Verse>
            <Line>And I’d sing with words You gave to me</Line>
            <Line>to tell of who You are</Line>
            <Line>You are The Mighty One</Line>
        </Verse>
        <Verse repeat>
            <Line>I’d sing to You, bring to You</Line>
            <Line>the song that all creation sings</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah to the King of kings</Line>
            <Line>Halleluyah</Line>
            <Line>Halleluyah Creator of all things</Line>
            <Line>Halleluyah</Line>
        </Verse>
        <Verse>
            <Line>Worthy! Worthy!</Line>
            <Line>
                <Yahweh /> Almighty
            </Line>
        </Verse>
        <Verse>
            <Line>Worthy! You are worthy!</Line>
            <Line>
                <Yahweh /> Almighty
            </Line>
            <Line>and so we sing</Line>
        </Verse>
        <Verse repeat repeatText="x5">
            <Line>Halleluyah to the King of kings</Line>
            <Line>Halleluyah</Line>
            <Line>Halleluyah Creator of all things</Line>
            <Line>Halleluyah</Line>
        </Verse>
        <Verse>
            <Line>Oh halleluyah</Line>
        </Verse>
    </Track>
)

export { Halleluyah }
