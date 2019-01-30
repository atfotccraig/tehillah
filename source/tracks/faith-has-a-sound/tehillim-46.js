import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim46 = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "01:05",
            "01:28",
            "02:11",
            "02:32",
            "02:55",
            "03:38",
        ]}
        music="faith_has_a_sound_tehillim_46"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.Tehillim46 />
        </Title>
        <Verse repeat>
            <Line>
                Come see the works of <Yahweh />
            </Line>
            <Line>The ruins he has wrought on the earth</Line>
            <Line>Causing all fighting to cease</Line>
            <Line>unto the end of the earth</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>He breaks the bow</Line>
            <Line>and shatters the spear</Line>
            <Line>He burns the chariot with fire</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>Be still and know</Line>
            <Line>that I am Elohim</Line>
            <Line>I am exalted among the nations</Line>
            <Line>and in all of the earth</Line>
        </Verse>
        <Verse>
            <Line>
                Come see the works of <Yahweh />
            </Line>
            <Line>The ruins he has wrought on the earth</Line>
            <Line>Causing all fighting to cease</Line>
            <Line>unto the end of the earth</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>And in all of the earth</Line>
        </Verse>
    </Track>
)

export { Tehillim46 }
