import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"

const AVoiceInTheWilderness = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:34",
            "00:55",
            "01:21",
            "02:07",
            "02:28",
            "02:49",
            "03:10",
            "03:54",
            "04:14",
        ]}
        music="peace_with_you_a_voice_in_the_wilderness"
        {...props}
    >
        <Title>A Voice In The Wilderness</Title>
        <Verse>
            <Line>You call to the Master</Line>
            <Line>and profess to know Him</Line>
            <Line>though not in truth or righteousness</Line>
        </Verse>
        <Verse>
            <Line>He teaches what is best</Line>
            <Line>and He leads you in the right way</Line>
            <Line>if only you would listen to His word</Line>
        </Verse>
        <Verse>
            <Line>Oh, He calls out, but you won’t hear</Line>
            <Line>So He’ll postpone His displeasure</Line>
            <Line>and refine you in</Line>
            <Line>the furnace of affliction</Line>
        </Verse>
        <Verse repeat>
            <Line>Yisra’ěl, Yisra’ěl!</Line>
            <Line>Come out! Oh, hear me calling!</Line>
            <Line>Yisra’ěl, His chosen son</Line>
            <Line>flee from idolatry</Line>
        </Verse>
        <Verse>
            <Line>He founded the earth</Line>
            <Line>and stretched out the heavens</Line>
            <Line>He who did this</Line>
            <Line>inscribed you on His palms</Line>
        </Verse>
        <Verse>
            <Line>If you would just listen</Line>
            <Line>and obey what He tells you</Line>
            <Line>and remember that</Line>
            <Line>He never breaks His word</Line>
        </Verse>
        <Verse>
            <Line>Oh, He formed you</Line>
            <Line>and brought you near</Line>
            <Line>to show you favour</Line>
            <Line>‘cause you’re precious in His eyes</Line>
        </Verse>
        <Verse name="one" repeat>
            <Line>Yisra’ěl, Yisra’ěl!</Line>
            <Line>Come out! Oh, hear me calling!</Line>
            <Line>Yisra’ěl, oh favoured one</Line>
            <Line>flee from idolatry</Line>
        </Verse>
        <Verse repeat>
            <Line>
                <Yahweh /> your Elohim is your redeemer
            </Line>
            <Line>Return to Him, He’s the one!</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { AVoiceInTheWilderness }
