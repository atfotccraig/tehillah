import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const Hoshianah = props => (
    <Track
        cues={[
            "00:00",
            "00:14",
            "00:33",
            "00:51",
            "01:11",
            "01:28",
            "01:45",
            "02:01",
            "02:20",
            "02:38",
            "02:58",
            "03:15",
            "03:31",
            "03:48",
            "04:05",
        ]}
        music="new_songs_hoshianah"
        {...props}
    >
        <Title>
            <Labels.NewSongs.Hoshianah />
        </Title>
        <Verse>
            <Line>He was pierced for our wrongs</Line>
            <Line>He was crushed for our sins</Line>
            <Line>Chastised for our peace</Line>
            <Line>and by His stripes we are healed</Line>
        </Verse>
        <Verse>
            <Line>They spat in His face</Line>
            <Line>impaled on the stake</Line>
            <Line>Lots they would cast</Line>
            <Line>as a sign of disgrace</Line>
        </Verse>
        <Verse>
            <Line>We all went astray</Line>
            <Line>and we turned our own way</Line>
            <Line>He died so that all can come and obey</Line>
        </Verse>
        <Verse name="one">
            <Line>Hoshianah! In the highest</Line>
            <Line>Hoshianah! Ben {"Dawiḏ"}</Line>
            <Line>Hoshianah! You, who came in the Name</Line>
            <Line>
                so <Yisrael /> is saved
            </Line>
        </Verse>
        <Verse name="two">
            <Line>Hoshianah! In the highest</Line>
            <Line>Hoshianah! Redeemer</Line>
            <Line>Hoshianah! To the Lamb that was slain</Line>
            <Line>ruler of heaven and earth</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>We hold fast to His Name</Line>
            <Line>in which we make our claim</Line>
            <Line>A sceptre of straightness</Line>
            <Line>is the sign of His reign</Line>
        </Verse>
        <Verse>
            <Line>We sing our praise to You</Line>
            <Line>
                giving thanks to <Yahweh />
            </Line>
            <Line>In His favour and His truth</Line>
            <Line>and shalom we will stay</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>
                Halleluyah for <Yahshua />!
            </Line>
            <Line>Halleluyah to the King</Line>
            <Line>
                Halleluyah for <Yahshua />
            </Line>
            <Line>the Name that saves!</Line>
        </Verse>
    </Track>
)

export { Hoshianah }
