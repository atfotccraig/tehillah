import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahshua } from "app/components"
import Labels from "app/labels"

const IAmFree = props => (
    <Track
        cues={[
            "00:00",
            "00:11",
            "00:37",
            "01:01",
            "01:27",
            "01:52",
            "02:05",
            "02:18",
            "02:31",
            "02:43",
            "03:10",
            "03:35",
            "04:01",
        ]}
        music="peace_with_you_i_am_free"
        {...props}
    >
        <Title>
            <Labels.PeaceWithYou.IAmFree />
        </Title>
        <Verse>
            <Line>Sometimes your words cut deep and sore</Line>
            <Line>and I wonder what I did</Line>
            <Line>I try to hide how much it hurts</Line>
            <Line>and I hope I pull it off</Line>
        </Verse>
        <Verse>
            <Line>I’ve made mistakes I’ll give you that</Line>
            <Line>I won’t pretend or be a fake</Line>
            <Line>But I am not the one I was</Line>
            <Line>I’ve been redeemed, I’m loved!</Line>
        </Verse>
        <Verse name="one">
            <Line>You can trample me down</Line>
            <Line>a thousand times</Line>
            <Line>but I’ll keep getting up</Line>
            <Line>I am not who I was, I won’t go back</Line>
            <Line>Forgiven much, I’ll love!</Line>
        </Verse>
        <Verse name="two" repeat>
            <Line>I am free, I am free, oh I know who I am</Line>
            <Line>I am free, I am free, this is me</Line>
        </Verse>
        <Verse>
            <Line>You have tried far too long</Line>
            <Line>to hold me back</Line>
            <Line>I will not let you do it anymore</Line>
        </Verse>
        <Verse>
            <Line>All my life you have been</Line>
            <Line>different enemies</Line>
            <Line>
                but <Yahshua /> has set me free
            </Line>
        </Verse>
        <Verse>
            <Line>So I’ll be what my saviour</Line>
            <Line>redeemed me to be</Line>
            <Line>and I’ll not let you win anymore</Line>
        </Verse>
        <Verse>
            <Line>There is nothing you can do</Line>
            <Line>to me from now on</Line>
            <Line>that will steal what my maker gave me</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { IAmFree }
