import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const MyOneDesire = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:36",
            "00:56",
            "01:06",
            "01:15",
            "01:25",
            "01:37",
            "01:56",
            "02:15",
            "02:24",
            "02:34",
            "02:43",
            "02:56",
            "03:14",
            "03:50",
        ]}
        music="faith_has_a_sound_my_one_desire"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.MyOneDesire />
        </Title>
        <Verse>
            <Line>You are my one desire</Line>
            <Line>and nothing else</Line>
            <Line>could ever compare or satisfy</Line>
        </Verse>
        <Verse name="one">
            <Line>
                <Yahweh />, you are my one desire
            </Line>
            <Line>and nothing else</Line>
            <Line>could ever compare or satisfy</Line>
        </Verse>
        <Verse name="two">
            <Line>And no matter what</Line>
            <Line>this world throws at me</Line>
            <Line>you are the one</Line>
            <Line>that I want to please</Line>
        </Verse>
        <Verse name="three">
            <Line>Darkness may come</Line>
            <Line>death knock on my door</Line>
            <Line>My lips will praise</Line>
            <Line>your name ever more</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>For you are my one desire</Line>
            <Line>and nothing else</Line>
            <Line>could ever compare or satisfy</Line>
        </Verse>
        <Repeat name="one" />
        <Verse name="four">
            <Line>All of my heart</Line>
            <Line>seeks after you</Line>
            <Line>In all of this mess</Line>
            <Line>you still remain true</Line>
        </Verse>
        <Verse name="five">
            <Line>Weeping may come</Line>
            <Line>but you wipe away tears</Line>
            <Line>When I am afraid</Line>
            <Line>you conquer my fears</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse>
            <Line>And you are my one desire</Line>
            <Line>and nothing else</Line>
            <Line>could ever compare or satisfy</Line>
        </Verse>
        <Verse repeat>
            <Line>
                <Yahweh />, you are my one desire
            </Line>
            <Line>and nothing else</Line>
            <Line>could ever compare or satisfy</Line>
        </Verse>
        <Verse>
            <Line>You are my one desire</Line>
        </Verse>
    </Track>
)

export { MyOneDesire }
