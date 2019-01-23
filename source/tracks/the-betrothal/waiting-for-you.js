import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const WaitingForYou = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:18",
            "00:31",
            "00:44",
            "00:57",
            "01:10",
            "01:22",
            "01:35",
            "01:48",
            "02:00",
            "02:13",
            "02:26",
            "02:39",
            "02:52",
            "03:05",
        ]}
        music="the_betrothal_waiting_for_you"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.WaitingForYou />
        </Title>
        <Verse>
            <Line>My heart yearns for you, Yah</Line>
            <Line>I have no other hope, but you</Line>
        </Verse>
        <Verse>
            <Line>I’ve walked through the wilderness</Line>
            <Line>I’ve come to the point of surrender</Line>
        </Verse>
        <Verse>
            <Line>My soul cries for your truth</Line>
            <Line>I have relinquished my own wants</Line>
        </Verse>
        <Verse>
            <Line>My dreams and my sorrows linger</Line>
            <Line>The things that will bind me to this earth</Line>
        </Verse>
        <Verse>
            <Line>I know you hear my wounded cry</Line>
            <Line>I know you see my trembling hands</Line>
        </Verse>
        <Verse>
            <Line>I have no other place to turn</Line>
            <Line>Don’t leave me drowning in this hurt</Line>
        </Verse>
        <Verse>
            <Line>In fierce persecution</Line>
            <Line>My enemies laugh at my distress</Line>
        </Verse>
        <Verse>
            <Line>The battle seems long in desperate times</Line>
            <Line>But I know the vict’ry is in you</Line>
        </Verse>
        <Verse>
            <Line>And when you return, Yah</Line>
            <Line>Please have compassion on my life</Line>
        </Verse>
        <Verse>
            <Line>My eyes long to see you, master</Line>
            <Line>I hope my faith stands firm in time</Line>
        </Verse>
        <Verse name="one">
            <Line>I will lift up these trembling hands</Line>
            <Line>I will lay bare my stumbling heart</Line>
        </Verse>
        <Verse name="two">
            <Line>I will hold faith in your great word</Line>
            <Line>And I will wait for your reward</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse />
    </Track>
)

export { WaitingForYou }
