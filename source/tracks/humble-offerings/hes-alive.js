import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const HesAlive = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "00:47",
            "00:58",
            "01:09",
            "01:33",
            "01:44",
            "01:55",
            "02:18",
            "02:30",
            "02:41",
            "03:27",
        ]}
        music="humble_offerings_hes_alive"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.HesAlive />
        </Title>
        <Verse name="one">
            <Line>He’s alive! He’s risen from the dead</Line>
            <Line>He’s alive, after dying in my stead</Line>
            <Line>He’s alive, and I’ll find my life in Him</Line>
            <Line>
                <Yahshua />
                ’s own declare that He’s alive
            </Line>
        </Verse>
        <Verse>
            <Line>I was brought before</Line>
            <Line>the Master’s face one day</Line>
            <Line>naked and ashamed and despised</Line>
        </Verse>
        <Verse>
            <Line>And then He looked at me</Line>
            <Line>and I just couldn’t help but weep</Line>
            <Line>There was nothing but compassion</Line>
            <Line>in His eyes</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>When the Master died</Line>
            <Line>I denied that I was His</Line>
            <Line>I feared for my own life</Line>
            <Line>and ran away</Line>
        </Verse>
        <Verse>
            <Line>And then when He arose He came</Line>
            <Line>and asked me “Do you love me?”</Line>
            <Line>He restored me to right-standing</Line>
            <Line>on that day</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>I was born in sin</Line>
            <Line>with my eyes both firmly shut</Line>
            <Line>
                But <Yahshua /> gave me back my sight
            </Line>
        </Verse>
        <Verse>
            <Line>And no-one would believe me</Line>
            <Line>when I told them what He’d done</Line>
            <Line>But still I will declare</Line>
            <Line>that He’s the light</Line>
        </Verse>
        <Verse repeat>
            <Line>He’s alive! He’s risen from the dead</Line>
            <Line>He’s alive, after dying in my stead</Line>
            <Line>He’s alive, and I’ll find my life in him</Line>
            <Line>
                <Yahshua />
                ’s own declare that He’s alive
            </Line>
        </Verse>
        <Verse>
            <Line>
                <Yahshua />
                ’s own declare that He’s alive
            </Line>
        </Verse>
    </Track>
)

export { HesAlive }
