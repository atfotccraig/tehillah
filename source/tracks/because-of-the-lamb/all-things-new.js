import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const AllThingsNew = props => (
    <Track
        cues={["00:12", "00:36", "01:01", "01:13", "01:26", "01:53", "02:30", "02:58", "03:32"]}
        music="because-of-the-lamb-all-things-new"
        {...props}
    >
        <Verse>
            <Line>You, you take my suffering</Line>
            <Line>Turn it into blessing</Line>
            <Line>You, you take my burdens</Line>
            <Line>and set my heart free</Line>
        </Verse>
        <Verse>
            <Line>You, you take my old life</Line>
            <Line>Exchange it for a new one</Line>
            <Line>How can I thank you</Line>
            <Line>for all that you’ve done?</Line>
        </Verse>
        <Verse>
            <Line>You take my fear</Line>
            <Line>and you give me new boldness</Line>
            <Line>You take my strife</Line>
            <Line>and in you I find rest</Line>
        </Verse>
        <Verse>
            <Line>You took my place</Line>
            <Line>on that day when you died</Line>
            <Line>Conquered my sin</Line>
            <Line>there you made me alive</Line>
        </Verse>
        <Verse repeat>
            <Line>You took it all</Line>
            <Line>all I was, all I’ve done</Line>
            <Line>You gave me yourself</Line>
            <Line>and the freedom you’ve won</Line>
        </Verse>
        <Verse>
            <Line>So let my life declare your splendour</Line>
            <Line>Let my lips sing praise to you</Line>
            <Line>Let my hands be raised in worship</Line>
            <Line>
                <Yahweh /> you make all things new, yeah
            </Line>
            <Line>
                <Yahweh /> you make all things new, yeah
            </Line>
        </Verse>
        <Repeat>You took it all</Repeat>
        <Verse>
            <Line>So let my life declare your splendour</Line>
            <Line>Let my lips sing praise to you</Line>
            <Line>Let my hands be raised in worship</Line>
            <Line>
                <Yahweh /> you make all things new, yeah
            </Line>
            <Line>
                <Yahweh /> you make all things new
            </Line>
        </Verse>
    </Track>
)

export { AllThingsNew }
