import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"

const YourLove = props => (
    <Track
        cues={[
            "00:00",
            "00:21",
            "00:47",
            "01:11",
            "01:59",
            "02:23",
            "02:47",
            "03:37",
            "03:59",
            "04:23",
        ]}
        music="peace_with_you_your_love"
        {...props}
    >
        <Title>Your Love</Title>
        <Verse name="one">
            <Line>Your love is a fountain</Line>
            <Line>It pours living water deep into my soul</Line>
            <Line>It lifts up my being and strengthens</Line>
            <Line>the marrow deep inside my bones</Line>
        </Verse>
        <Verse name="two">
            <Line>It’s like rays of sunshine</Line>
            <Line>that breaks through the clouds</Line>
            <Line>on dark stormy days</Line>
            <Line>and warms cold dark corners</Line>
            <Line>It lights up my path in all kinds of ways</Line>
        </Verse>
        <Verse repeat>
            <Line>The hosts of the heavens and all of</Line>
            <Line>the things that live on this earth</Line>
            <Line>sing all their praise to you</Line>
            <Line>and offers the worship</Line>
            <Line>that you deserve</Line>
        </Verse>
        <Verse>
            <Line>As I view creation, as seasons bring</Line>
            <Line>rain and warmth and new growth</Line>
            <Line>Unwavering promise</Line>
            <Line>inscribed in the rise and set of the sun</Line>
        </Verse>
        <Verse>
            <Line>I strive to be faithful</Line>
            <Line>and give you the joy of my perfect heart</Line>
            <Line>To worship you only</Line>
            <Line>and shine with the light</Line>
            <Line>you placed in the dark</Line>
        </Verse>
        <Verse repeat>
            <Line>Oh fill me with your love</Line>
            <Line>without it my life is empty and dark</Line>
            <Line>I give my life to you</Line>
            <Line>and vow to love you</Line>
            <Line>with all of my heart</Line>
        </Verse>
        <Verse />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { YourLove }
