import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim19 = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:25",
            "00:36",
            "00:47",
            "00:59",
            "01:10",
            "01:21",
            "01:33",
            "01:44",
            "01:55",
            "02:07",
        ]}
        music="living_waters_tehillim_19"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim19 />
        </Title>
        <Verse>
            <Line>The Torah of <Yahweh /> is perfect</Line>
            <Line>Bringing back the being of a man</Line>
        </Verse>
        <Verse>
            <Line>The witness of <Yahweh /></Line>
            <Line>deserves your trust</Line>
            <Line>It turns the simple things</Line>
            <Line>to wisdom</Line>
        </Verse>
        <Verse>
            <Line>The orders of <Yahweh /></Line>
            <Line>are straight and just</Line>
            <Line>They make your very heart</Line>
            <Line>rejoice and sing</Line>
        </Verse>
        <Verse>
            <Line>The command of <Yahweh /></Line>
            <Line>is crystal clear</Line>
            <Line>It will enlighten eyes</Line>
            <Line>that they can see</Line>
        </Verse>
        <Verse>
            <Line>The fear of <Yahweh /></Line>
            <Line>is pure and clean</Line>
            <Line>It will stand when all</Line>
            <Line>else fades away</Line>
        </Verse>
        <Verse>
            <Line>The rulings of <Yahweh /></Line>
            <Line>are always true</Line>
            <Line>They are altogether righteous</Line>
            <Line>every one</Line>
        </Verse>
        <Verse>
            <Line>More desirable than</Line>
            <Line>much fine gold or wealth</Line>
            <Line>Sweeter than the</Line>
            <Line>sweetest honeycomb</Line>
        </Verse>
        <Verse>
            <Line>Your servant's heart</Line>
            <Line>is warned by every one</Line>
            <Line>In guarding them</Line>
            <Line>I find my great reward</Line>
        </Verse>
        <Verse>
            <Line>Oh <Yahweh />, declare</Line>
            <Line>me innocent of sin</Line>
            <Line>Hold me back from transgression</Line>
        </Verse>
        <Verse>
            <Line>Let the words of my mouth</Line>
            <Line>and meditation of my heart</Line>
            <Line>Be a pleasing sacrifice</Line>
        </Verse>
        <Verse repeat>
            <Line>Oh <Yahweh />, the Elohim</Line>
            <Line>of all the earth</Line>
            <Line>You are my Rock</Line>
            <Line>and my Redeemer</Line>
        </Verse>
    </Track>
)

export { Tehillim19 }
