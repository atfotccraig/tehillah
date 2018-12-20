import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const TheWayOfMan = props => (
    <Track
        cues={[
            "00:00",
            "00:10",
            "00:30",
            "00:51",
            "01:13",
            "01:33",
            "01:54",
            "02:36",
            "02:57",
            "03:38",
        ]}
        music="refined_the_way_of_man"
        {...props}
    >
        <Title>
            <Labels.Refined.TheWayOfMan />
        </Title>
        <Verse>
            <Line>There is a way that seems right to man</Line>
            <Line>There is a way that we can understand</Line>
            <Line>Oh man, but how does it look</Line>
            <Line>in the eyes of your creator?</Line>
        </Verse>
        <Verse>
            <Line>His eyes are on the ways of man</Line>
            <Line>His throne set in the heavens</Line>
            <Line>All things belong to Him alone</Line>
            <Line>Let Him teach you all His ways</Line>
        </Verse>
        <Verse>
            <Line>So let not your heart be proud</Line>
            <Line>Trust Him for everything</Line>
            <Line>His ways are above our ways</Line>
            <Line>He judges in right-ruling</Line>
        </Verse>
        <Verse>
            <Line>Oh man, we were formed from the clay</Line>
            <Line>and the Almighty gives us life</Line>
            <Line>Oh man, do you know where wisdom lives</Line>
            <Line>where’s the home of understanding?</Line>
        </Verse>
        <Verse name="one">
            <Line>He alone gives wisdom</Line>
            <Line>He alone knows the best way</Line>
            <Line>He alone sees everything</Line>
            <Line>He alone knows every heart</Line>
        </Verse>
        <Verse name="two" repeat>
            <Line>So let not your heart be proud</Line>
            <Line>Trust Him for everything</Line>
            <Line>His ways are above our ways</Line>
            <Line>He judges in right-ruling</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>There is a way that seems right to man</Line>
            <Line>There is a way that we can understand</Line>
            <Line>Oh man, but the path of life</Line>
            <Line>is in the hand of your creator</Line>
        </Verse>
    </Track>
)

export { TheWayOfMan }
