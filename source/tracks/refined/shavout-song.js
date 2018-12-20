import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const ShavoutSong = props => (
    <Track
        cues={["00:00", "00:08", "00:41", "01:00", "01:33"]}
        music="refined_shavout_song"
        {...props}
    >
        <Title>
            <Labels.Refined.ShavoutSong />
        </Title>
        <Verse name="one" repeat>
            <Line>{"Ḥag sameaḥ Shaḇuoth"}</Line>
            <Line>{"Ḥag sameaḥ Shaḇuoth"}</Line>
            <Line>{"Ḥag sameaḥ Shaḇuoth"}</Line>
            <Line>It is the feast of weeks!</Line>
        </Verse>
        <Verse>
            <Line>We have been brought near</Line>
            <Line>Call on him in fear</Line>
            <Line>Come rejoice with me</Line>
            <Line>So that the world can see</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat>
            <Line>Halleluyah</Line>
            <Line>
                <Yahweh /> made an oath
            </Line>
            <Line>Master breathe on me</Line>
            <Line>Your spirit sets me free</Line>
        </Verse>
    </Track>
)

export { ShavoutSong }
