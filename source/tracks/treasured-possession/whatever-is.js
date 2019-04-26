import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const WhateverIs = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:14",
            "00:26",
            "00:38",
            "00:57",
            "01:08",
            "01:19",
            "01:30",
            "01:44",
            "02:02",
            "02:16",
        ]}
        music="treasured_possession_whatever_is"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.WhateverIs />
        </Title>
        <Verse name="one">
            <Line>Whatever is true, whatever is noble</Line>
            <Line>whatever is righteous</Line>
            <Line>Think on these</Line>
        </Verse>
        <Verse name="two">
            <Line>Whatever is clean, whatever is lovely</Line>
            <Line>all that is of good report</Line>
            <Line>Think on these</Line>
        </Verse>
        <Verse name="three">
            <Line>If there is uprightness</Line>
            <Line>and if there is praise</Line>
            <Line>the good that you see and hear</Line>
            <Line>Practise these</Line>
        </Verse>
        <Verse>
            <Line>It is Messiah who works what is good</Line>
            <Line>So let Him fill your life</Line>
            <Line>Be a sweet-smelling fragrance to Him</Line>
            <Line>and you’ll have peace</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse name="four">
            <Line>
                The Master <Yahshua />
            </Line>
            <Line>it’s Him that you serve</Line>
            <Line>So let Him guard your heart</Line>
            <Line>Be filled with good fruit in each season</Line>
        </Verse>
        <Verse name="five">
            <Line>Your life is a witness to Him</Line>
            <Line>So do what He asks of you</Line>
            <Line>and He’ll forever be pleased</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
    </Track>
)

export { WhateverIs }
