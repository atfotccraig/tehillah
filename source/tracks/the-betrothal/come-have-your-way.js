import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ComeHaveYourWay = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:36",
            "00:55",
            "01:13",
            "01:32",
            "01:51",
            "02:09",
        ]}
        music="the_betrothal_come_have_you_way"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.ComeHaveYourWay />
        </Title>
        <Verse>
            <Line>In the midst of all my darkness</Line>
            <Line>You come and shine a light</Line>
            <Line>Your wonders never cease, Yah</Line>
            <Line>You make day come after night</Line>
        </Verse>
        <Verse>
            <Line>My fear and my trembling flee</Line>
            <Line>before the majesty of You</Line>
            <Line>And I’m humbled in Your presence</Line>
            <Line>Let my faith begin anew</Line>
        </Verse>
        <Verse name="one">
            <Line>And I say come and have Your way</Line>
            <Line>and let Your Word be my guide</Line>
            <Line>I hear each word You say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
        <Verse>
            <Line>Come and have Your way</Line>
            <Line>and let Your Word be my guide</Line>
            <Line>I hear each word You say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
        <Verse>
            <Line>Somewhere on this journey</Line>
            <Line>my first love’s flame went out</Line>
            <Line>but now I hear You calling</Line>
            <Line>You’ve come to seek me out</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat>
            <Line>Come and have Your way</Line>
            <Line>and let Your Word be my guide</Line>
            <Line>I hear each word You say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
    </Track>
)

export { ComeHaveYourWay }
