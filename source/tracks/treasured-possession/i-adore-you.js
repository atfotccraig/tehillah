import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const IAdoreYou = props => (
    <Track
        cues={[
            "00:00",
            "00:04",
            "00:27",
            "00:51",
            "01:15",
            "01:40",
            "02:10",
            "02:50",
            "03:09",
        ]}
        music="treasured_possession_i_adore_you"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.IAdoreYou />
        </Title>
        <Verse>
            <Line>Here in Your presence</Line>
            <Line>is where I want to be</Line>
            <Line>and the look in Your eyes</Line>
            <Line>is all I want to see</Line>
            <Line>I adore You</Line>
        </Verse>
        <Verse>
            <Line>When you’re here beside Me</Line>
            <Line>My joy is complete</Line>
            <Line>When I see that you love Me</Line>
            <Line>My heart skips a beat</Line>
            <Line>I adore you</Line>
        </Verse>
        <Verse>
            <Line>When my heart is broken</Line>
            <Line>You’re all that I need</Line>
            <Line>As the whirlwind surrounds me</Line>
            <Line>You bring me to my feet</Line>
            <Line>I adore You</Line>
        </Verse>
        <Verse>
            <Line>When you are in danger</Line>
            <Line>I leap to My feet</Line>
            <Line>I will move all the mountains</Line>
            <Line>to answer you in need</Line>
            <Line>I adore you</Line>
        </Verse>
        <Verse>
            <Line>Draw me close to where you are</Line>
            <Line>Bring me near to everlasting arms</Line>
            <Line>I adore you</Line>
        </Verse>
        <Verse repeat>
            <Line>When we are together</Line>
            <Line>the whole world just fades away</Line>
            <Line>Your ardour revives me</Line>
            <Line>and I feel compelled to stay</Line>
        </Verse>
        <Verse>
            <Line>Draw me close to where you are</Line>
            <Line>Bring me near to everlasting arms</Line>
        </Verse>
        <Verse repeat repeatText="x5">
            <Line>I adore you</Line>
        </Verse>
    </Track>
)

export { IAdoreYou }
