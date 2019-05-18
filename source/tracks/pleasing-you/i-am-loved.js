import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const IAmLoved = props => (
    <Track
        cues={[
            "00:00",
            "00:34",
            "00:51",
            "01:08",
            "01:26",
            "01:43",
            "02:00",
            "02:17",
            "02:34",
            "02:52",
            "03:26",
            "03:43",
            "04:01",
            "04:18",
            "04:38",
            "04:53",
        ]}
        music="pleasing_you_i_am_loved"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.IAmLoved />
        </Title>
        <Verse name="one">
            <Line>I am loved, I am loved</Line>
            <Line>I am loved by the King</Line>
            <Line>And it is such a wonderful thing</Line>
        </Verse>
        <Verse name="two">
            <Line>I am loved, I am loved</Line>
            <Line>I am loved by the King</Line>
            <Line>Come and join in the song that I sing</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Words come and go</Line>
            <Line>and knowledge will fade</Line>
            <Line>Even prophecies become as naught</Line>
        </Verse>
        <Verse>
            <Line>But when, on that day</Line>
            <Line>the Perfect One comes</Line>
            <Line>I declare that by His blood I’m bought</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Faith will remain and hope will not fail</Line>
            <Line>But love is the greatest of all</Line>
            <Line>And so I will wait until You return</Line>
            <Line>and Your bride will respond to Your call</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { IAmLoved }
