import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const TheChoiceToRejoice = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:34",
            "00:57",
            "01:20",
            "01:43",
            "02:07",
            "02:50",
        ]}
        music="faith_has_a_sound_the_choice_to_rejoice"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.TheChoiceToRejoice />
        </Title>
        <Verse repeat name="one">
            <Line>We make the choice, we will rejoice</Line>
            <Line>no matter what may come</Line>
            <Line>We make the choice, we will rejoice</Line>
            <Line>
                because of what <Yahweh /> has done
            </Line>
        </Verse>
        <Verse repeat name="two">
            <Line>And we will clap our hands</Line>
            <Line>And we will stamp our feet</Line>
            <Line>And we will raise our voices</Line>
            <Line>high in victory</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Verse repeat>
            <Line>Lift Him up! Sing a new song</Line>
            <Line>for He has overcome the world</Line>
            <Line>Lift Him up! Tell the story</Line>
            <Line>until everyone in all the world has heard</Line>
        </Verse>
        <Repeat name="one" />
    </Track>
)

export { TheChoiceToRejoice }
