import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const AriseShine = props => (
    <Track
        cues={["00:00", "00:24", "00:47", "01:09", "01:57", "02:40"]}
        music="true_worship_arise_shine"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.AriseShine />
        </Title>
        <Verse>
            <Line>Darkness covers the earth</Line>
            <Line>there’s a shadow over the world</Line>
            <Line>Clouds have covered the sun</Line>
            <Line>there’s nowhere left for us to run</Line>
        </Verse>
        <Verse>
            <Line>But He is still on the throne</Line>
            <Line>His Kingdom will not pass away</Line>
            <Line>He tells us we should be strong</Line>
            <Line>Listen, do you hear the song?</Line>
        </Verse>
        <Verse name="one" repeat>
            <Line>Arise! Shine for your light has come</Line>
            <Line>Arise! Shine like the morning sun</Line>
        </Verse>
        <Verse repeat>
            <Line>
                For the splendour of <Yahweh /> is on you
            </Line>
            <Line>He’s turned His face to you</Line>
            <Line>And the nations will come running to you</Line>
            <Line>They’re desperate for the truth</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { AriseShine }
