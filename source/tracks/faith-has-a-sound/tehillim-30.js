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
                I exalt you <Yahweh />
            </Line>
            <Line>for you have drawn me up</Line>
            <Line>My enemies do not rejoice over me</Line>
        </Verse>
        <Verse>
            <Line>
                <Yahweh /> my elohim, I cried to you
            </Line>
            <Line>and you have healed me</Line>
            <Line>yes you have healed me</Line>
        </Verse>
        <Verse repeat>
            <Line>You brought me up from she’ol</Line>
            <Line>Preserved my life</Line>
            <Line>you kept me out of the pit</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>
                Sing praise to <Yahweh />
            </Line>
            <Line>All you who call upon</Line>
            <Line>his wondrous name</Line>
        </Verse>
        <Verse name="two">
            <Line>His displeasure is for a moment</Line>
            <Line>His delight is for all time</Line>
        </Verse>
        <Verse name="three">
            <Line>Weeping may last for the night</Line>
            <Line>but his joy will come</Line>
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
            <Line>you’ve clothed me with joy</Line>
        </Verse>
        <Verse name="five">
            <Line>So that esteem might praise you</Line>
            <Line>and not be silent</Line>
            <Line>All of my days I thank you</Line>
            <Line>for who you are</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat repeatText="x3">
            <Line>
                Sing praise to <Yahweh />
            </Line>
            <Line>All you who call upon</Line>
            <Line>his wondrous name</Line>
        </Verse>
    </Track>
)

export { Tehillim30 }
