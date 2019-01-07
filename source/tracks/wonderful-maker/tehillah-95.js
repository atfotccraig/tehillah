import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah95 = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:33",
            "01:11",
            "01:28",
            "02:05",
            "02:23",
            "02:40",
            "03:17",
            "03:34",
            "04:11",
        ]}
        music="wonderful_maker_tehillah_95"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.Tehillah95 />
        </Title>
        <Verse name="one">
            <Line>Come let us sing, come let us sing</Line>
            <Line>Come sing a song to our creator</Line>
            <Line>Come let us sing, come let us sing</Line>
            <Line>Come and rejoice before our maker</Line>
        </Verse>
        <Verse repeat name="two">
            <Line>Lift your voice, come bow down</Line>
            <Line>Sing out loud, a beautiful sound</Line>
        </Verse>
        <Verse name="three">
            <Line>Come let us sing, come let us sing</Line>
            <Line>Lift up your face and show thanksgiving</Line>
            <Line>Come let us sing, come let us sing</Line>
            <Line>It is an offering we’re bringing</Line>
        </Verse>
        <Verse repeat name="four">
            <Line>Lift your voice, come bow down</Line>
            <Line>Raise a shout, that echoes the sound</Line>
        </Verse>
        <Verse name="five">
            <Line>Come let us sing, come let us sing</Line>
            <Line>Honour the sovereign of all nations</Line>
            <Line>Come let us sing, come let us sing</Line>
            <Line>
                Come kneel before <Yahweh /> our maker
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
    </Track>
)

export { Tehillah95 }
