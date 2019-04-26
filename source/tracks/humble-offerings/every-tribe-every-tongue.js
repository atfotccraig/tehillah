import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const EveryTribeEveryTongue = props => (
    <Track
        cues={[
            "00:00",
            "00:28",
            "00:37",
            "00:47",
            "00:56",
            "01:05",
            "01:15",
            "01:26",
            "01:43",
            "01:53",
            "02:02",
            "02:13",
            "02:30",
            "02:39",
            "02:48",
            "02:58",
            "03:07",
            "03:16",
        ]}
        music="humble_offerings_every_tribe_every_tongue"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.EveryTribeEveryTongue />
        </Title>
        <Verse name="one">
            <Line>Every tribe, every tongue, every nation</Line>
            <Line>Praise the Master and the King</Line>
            <Line>of all creation</Line>
        </Verse>
        <Verse name="two">
            <Line>Every people on earth</Line>
            <Line>come declare His great worth</Line>
            <Line>
                Every person raise your voice to <Yahweh />
            </Line>
        </Verse>
        <Verse name="three">
            <Line>Every tree, every stone</Line>
            <Line>
                sing to <Yahweh /> alone
            </Line>
            <Line>Let the wonders of His Name</Line>
            <Line>be made known</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>His Word has gone out</Line>
            <Line>and it will not return to Him void</Line>
            <Line>Until He returns</Line>
            <Line>and all unrighteousness</Line>
            <Line>has been destroyed</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>Let us be glad</Line>
            <Line>and rejoice and give praise to the Lamb</Line>
            <Line>For we are His bride</Line>
            <Line>and our Husband is the wonderful “I Am”</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>Every tree, every stone</Line>
            <Line>
                sing to <Yahweh /> alone
            </Line>
            <Line>Let the wonders of His Name</Line>
            <Line>be made known</Line>
        </Verse>
    </Track>
)

export { EveryTribeEveryTongue }
