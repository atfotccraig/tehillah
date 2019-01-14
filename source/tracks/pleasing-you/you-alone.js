import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const YouAlone = props => (
    <Track
        cues={["00:00", "00:26", "01:14", "02:02", "02:48", "03:58"]}
        music="pleasing_you_you_alone"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.YouAlone />
        </Title>
        <Verse repeat>
            <Line>My lips could never tell</Line>
            <Line>of all Your wonders</Line>
            <Line>My heart desires you alone</Line>
            <Line>I hear you in the roaring of the thunders</Line>
            <Line>I know you're seated on the throne</Line>
        </Verse>
        <Verse repeat>
            <Line>You alone can make my being tremble</Line>
            <Line>You alone can make the darkness flee</Line>
            <Line>At your voice the host of heav'n assemble</Line>
            <Line>You have come to set the captives free</Line>
        </Verse>
        <Verse repeat>
            <Line>I fall down at your feet in adoration</Line>
            <Line>I long to look upon your face</Line>
            <Line>My voice is raised in exaltation</Line>
            <Line>
                <Yahweh />, I’m humbled at your grace
            </Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>You alone can cancel my transgression</Line>
            <Line>You alone can take away my chains</Line>
            <Line>As I come and offer my confession</Line>
            <Line>
                my heart exults in knowing <Yahweh /> reigns
            </Line>
        </Verse>
        <Verse>
            <Line>
                My heart exults in knowing <Yahweh /> reigns
            </Line>
        </Verse>
    </Track>
)

export { YouAlone }
