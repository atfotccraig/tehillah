import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah67 = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:13",
            "00:25",
            "00:36",
            "00:48",
            "01:04",
            "01:21",
            "01:31",
            "01:41",
            "01:57",
            "02:12",
            "02:27",
            "02:43",
            "02:59",
            "03:12",
        ]}
        music="peace_with_you_tehillah_67"
        {...props}
    >
        <Title>
            <Labels.PeaceWithYou.Tehillah67 />
        </Title>
        <Verse name="one">
            <Line>
                <Yahweh /> shows us favour
            </Line>
            <Line>He blesses and causes</Line>
            <Line>His face to shine upon us</Line>
        </Verse>
        <Verse name="two">
            <Line>For His ways to be known on this earth</Line>
            <Line>and for His salvation among all nations</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>So, let all the people praise You, oh Master</Line>
            <Line>let nations be glad and sing for joy</Line>
        </Verse>
        <Verse>
            <Line>For judgement is Yours</Line>
            <Line>in all Your uprightness</Line>
            <Line>You lead nations on this earth</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse name="three">
            <Line>Yes, let all the people praise You, oh Master</Line>
            <Line>Let all the nations praise You alone</Line>
        </Verse>
        <Verse name="four">
            <Line>The earth give her increase</Line>
            <Line>For You bless in abundance</Line>
            <Line>In awe, we’ll bow before You</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse repeat>
            <Line>In awe, we’ll bow before You</Line>
        </Verse>
    </Track>
)

export { Tehillah67 }
