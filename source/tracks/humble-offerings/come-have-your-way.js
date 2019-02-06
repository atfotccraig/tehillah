import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ComeHaveYourWay = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:35",
            "00:53",
            "01:10",
            "01:29",
            "01:46",
            "02:03",
        ]}
        music="humble_offerings_come_have_your_way"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.ComeHaveYourWay />
        </Title>
        <Verse>
            <Line>In the midst of all my darkness</Line>
            <Line>you come and shine a light</Line>
            <Line>Your wonders never cease, Yah</Line>
            <Line>You make day come after night</Line>
        </Verse>
        <Verse>
            <Line>My fear and my trembling flee</Line>
            <Line>before the majesty of you</Line>
            <Line>And I’m humbled in your presence</Line>
            <Line>Let my faith begin anew</Line>
        </Verse>
        <Verse>
            <Line>I say come and have your way</Line>
            <Line>and let your word be my guide</Line>
            <Line>I hear each word you say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
        <Verse>
            <Line>Come and have your way</Line>
            <Line>and let your word be my guide</Line>
            <Line>I hear each word you say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
        <Verse>
            <Line>Somewhere on this journey</Line>
            <Line>my first love’s flame went out</Line>
            <Line>But now I hear you calling</Line>
            <Line>You’ve come to seek me out</Line>
        </Verse>
        <Verse>
            <Line>I say come and have your way</Line>
            <Line>and let your word be my guide</Line>
            <Line>I hear each word you say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
        <Verse repeat>
            <Line>Come and have your way</Line>
            <Line>and let your word be my guide</Line>
            <Line>I hear each word you say</Line>
            <Line>Let me never turn aside</Line>
        </Verse>
    </Track>
)

export { ComeHaveYourWay }
