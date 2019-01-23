import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim9 = props => (
    <Track
        cues={[
            "00:00",
            "00:08",
            "00:20",
            "00:32",
            "00:44",
            "00:55",
            "01:07",
            "01:19",
            "01:30",
            "01:42",
            "01:53",
            "02:05",
            "02:16",
            "02:28",
            "02:40",
        ]}
        music="the_betrothal_tehillim_9"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.Tehillim9 />
        </Title>
        <Verse>
            <Line>
                I praise you, oh <Yahweh />
            </Line>
            <Line>with all my heart</Line>
            <Line>I sing and exult in your name</Line>
        </Verse>
        <Verse>
            <Line>My enemies turn back</Line>
            <Line>and perish before you</Line>
            <Line>for you judge in righteousness</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahweh /> is my refuge
            </Line>
            <Line>in times of trouble</Line>
            <Line>and those known by you trust in you</Line>
        </Verse>
        <Verse>
            <Line>For you’ve not forsaken</Line>
            <Line>those seeking your truth</Line>
            <Line>remembering your faithfulness</Line>
        </Verse>
        <Verse name="one">
            <Line>
                Sing praises to <Yahweh />
            </Line>
            <Line>who dwells in Tsiyon</Line>
            <Line>declare His great deeds in the earth</Line>
        </Verse>
        <Verse name="two">
            <Line>
                Arise, master <Yahweh />
            </Line>
            <Line>and let all men see you</Line>
            <Line>exalted in righteousness</Line>
        </Verse>
        <Verse>
            <Line>
                Oh <Yahweh />, our master
            </Line>
            <Line>crowned with great splendour</Line>
            <Line>creation resounds with your praise</Line>
        </Verse>
        <Verse>
            <Line>For I see the heavens</Line>
            <Line>the work of your fingers</Line>
            <Line>established by your command</Line>
        </Verse>
        <Verse>
            <Line>The sea knows its limits</Line>
            <Line>lifts up its breakers</Line>
            <Line>The waters recede at your word</Line>
        </Verse>
        <Verse>
            <Line>All things that are living</Line>
            <Line>you formed it and made it</Line>
            <Line>declaring your majesty</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Verse repeat>
            <Line>
                Arise, master <Yahweh />
            </Line>
            <Line>and let all men see you</Line>
            <Line>exalted in righteousness</Line>
        </Verse>
    </Track>
)

export { Tehillim9 }
