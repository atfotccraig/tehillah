import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const YahwehWhoMovesMountains = props => (
    <Track
        cues={[
            "00:00",
            "00:24",
            "00:35",
            "00:47",
            "00:58",
            "01:12",
            "01:22",
            "01:34",
            "01:45",
            "01:56",
            "02:10",
            "02:20",
            "02:32",
            "02:43",
            "02:54",
        ]}
        music="because_of_the_lamb_yahweh_who_moves_mountains"
        {...props}
    >
        <Title>
            <Labels.BecauseOfTheLamb.YahwehWhoMovesMountains />
        </Title>
        <Verse name="one">
            <Line>
                ‘cause You’re <Yahweh />
            </Line>
            <Line>who moves the mountains</Line>
            <Line>and You’re the one who always</Line>
            <Line>makes good on His Word</Line>
        </Verse>
        <Verse name="two">
            <Line>Your joy is rising like a fountain</Line>
            <Line>and I will go out, Yah</Line>
            <Line>and hold on to what I’ve heard</Line>
        </Verse>
        <Verse>
            <Line>Oh give me eyes to see the truth</Line>
            <Line>To see the things You’re gonna do</Line>
            <Line>I wanna trust, I wanna know</Line>
            <Line>I wanna follow where You go</Line>
        </Verse>
        <Verse>
            <Line>You give me hope, You give me grace</Line>
            <Line>to stand and laugh in evil’s face</Line>
            <Line>You go before, You make a way</Line>
            <Line>and I will stand on what You say</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>The time has come, the time is now</Line>
            <Line>for all the world to come and bow</Line>
            <Line>
                before <Yahweh />, before our King
            </Line>
            <Line>let all creation rise and sing</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>
                ‘cause You’re <Yahweh />
            </Line>
            <Line>who moves the mountains</Line>
        </Verse>
    </Track>
)

export { YahwehWhoMovesMountains }
