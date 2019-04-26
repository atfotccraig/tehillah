import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim30 = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:33",
            "00:44",
            "01:07",
            "01:32",
            "01:43",
            "01:54",
            "02:05",
            "02:17",
            "02:41",
            "02:52",
            "03:03",
            "03:13",
            "03:24",
        ]}
        music="faith_has_a_sound_tehillim_30"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.Tehillim30 />
        </Title>
        <Verse repeat>
            <Line>
                I exalt You <Yahweh />
            </Line>
            <Line>for You have drawn me up</Line>
            <Line>My enemies do not rejoice over me</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahweh /> My Elohim, I cried to You
            </Line>
            <Line>and You have healed me</Line>
            <Line>yes You have healed me</Line>
        </Verse>
        <Verse repeat>
            <Line>You brought me up from she’ol</Line>
            <Line>Preserved my life</Line>
            <Line>You kept me out of the pit</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>
                Sing praise to <Yahweh />
            </Line>
            <Line>All you who call upon</Line>
            <Line>His Wondrous Name</Line>
        </Verse>
        <Verse name="two">
            <Line>His displeasure is for a moment</Line>
            <Line>His delight is for all time</Line>
        </Verse>
        <Verse name="three">
            <Line>Weeping may last for the night</Line>
            <Line>but His joy will come</Line>
            <Line>with the morning light</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Verse name="four">
            <Line>You’ve turned my mourning</Line>
            <Line>
                into dancing, <Yahweh />
            </Line>
            <Line>You took my sackcloth and</Line>
            <Line>You’ve clothed me with joy</Line>
        </Verse>
        <Verse name="five">
            <Line>So that esteem might praise You</Line>
            <Line>and not be silent</Line>
            <Line>All of my days I thank You</Line>
            <Line>for who You are</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat repeatText="x3">
            <Line>
                Sing praise to <Yahweh />
            </Line>
            <Line>All you who call upon</Line>
            <Line>His Wondrous Name</Line>
        </Verse>
    </Track>
)

export { Tehillim30 }
