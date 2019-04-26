import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const InYourPresence = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "00:34",
            "00:46",
            "00:58",
            "01:09",
            "01:32",
            "01:44",
            "01:56",
            "02:07",
            "02:20",
            "03:05",
            "03:17",
            "03:29",
            "03:40",
            "03:53",
            "04:38",
            "04:50",
        ]}
        music="the_betrothal_in_your_presence"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.InYourPresence />
        </Title>
        <Verse name="one">
            <Line>In Your presence</Line>
            <Line>my fear is defeated</Line>
            <Line>All uncertainty is driven away</Line>
        </Verse>
        <Verse name="two">
            <Line>In Your presence</Line>
            <Line>is strength when I need it</Line>
            <Line>And words when I</Line>
            <Line>don’t know what to say</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>How can I stand before the King?</Line>
            <Line>How can I not want to give everything?</Line>
        </Verse>
        <Verse name="three">
            <Line>For You are worthy</Line>
            <Line>there’s no one like You</Line>
            <Line>You’re the King of all the earth</Line>
        </Verse>
        <Verse name="four">
            <Line>And I find shelter</Line>
            <Line>in the shadow of Your wing, Yah</Line>
            <Line>In adoration</Line>
            <Line>declare your wondrous worth</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse repeat name="five">
            <Line>Halleluyah, to You I bring my offering</Line>
            <Line>Halleluyah, to no-one else will I sing</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { InYourPresence }
