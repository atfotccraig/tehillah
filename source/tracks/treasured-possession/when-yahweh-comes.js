import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const WhenYahwehComes = props => (
    <Track
        cues={[
            "00:00",
            "00:08",
            "00:32",
            "00:54",
            "01:18",
            "01:40",
            "01:52",
            "02:09",
            "02:24",
            "02:46",
            "03:01",
            "03:28",
        ]}
        music="treasured_possession_when_yahweh_comes"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.WhenYahwehComes />
        </Title>
        <Verse repeat name="one">
            <Line>
                When <Yahweh /> comes
            </Line>
            <Line>when He comes to save us</Line>
        </Verse>
        <Verse>
            <Line>The eyes of the blind shall see</Line>
            <Line>the ears of the deaf shall hear</Line>
            <Line>The lame shall leap like a deer</Line>
            <Line>
                when <Yahweh /> comes
            </Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Waters burst forth into streams</Line>
            <Line>the desert becomes a spring</Line>
            <Line>And the tongue of the dumb shall sing</Line>
            <Line>
                when <Yahweh /> comes
            </Line>
        </Verse>
        <Verse>
            <Line>The way of set-apartness is found</Line>
            <Line>and His redeemed walking there</Line>
        </Verse>
        <Verse>
            <Line>
                The ransomed of <Yahweh /> return
            </Line>
            <Line>everlasting joy on their heads</Line>
            <Line>
                when <Yahweh /> comes
            </Line>
        </Verse>
        <Verse name="two">
            <Line>Let the desert rejoice</Line>
            <Line>and the wilderness be glad</Line>
            <Line>
                They shall see the excellence of <Yahweh />
            </Line>
        </Verse>
        <Verse>
            <Line>So strengthen the weak hands</Line>
            <Line>make firm the trembling knees</Line>
            <Line>Say to those with anxious hearts</Line>
            <Line>Behold, your Elohim comes!</Line>
        </Verse>
        <Repeat name="two" />
        <Verse>
            <Line>So strengthen the weak hands</Line>
            <Line>make firm the trembling knees</Line>
            <Line>Say to those with anxious hearts</Line>
            <Line>Behold, your Elohim comes!</Line>
            <Line>Behold, your Elohim comes!</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>
                When <Yahweh /> comes
            </Line>
            <Line>when He comes to save us</Line>
        </Verse>
    </Track>
)

export { WhenYahwehComes }
