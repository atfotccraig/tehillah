import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yaaqob,
    Yahweh,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const Tehillah81 = props => (
    <Track
        cues={[
            "00:00",
            "00:02",
            "00:20",
            "00:36",
            "00:53",
            "01:10",
            "01:27",
            "01:44",
            "02:01",
            "02:18",
            "02:34",
            "02:51",
            "03:08",
            "03:25",
        ]}
        music="refined_tehillah_81"
        {...props}
    >
        <Title>
            <Labels.Refined.Tehillah81 />
        </Title>
        <Verse name="one">
            <Line>Shout for joy to Elohim our strength</Line>
            <Line>
                Raise a shout to the Elohim of <Yaaqob />
            </Line>
            <Line>Lift up a song and beat the tambourine</Line>
            <Line>Play the harp and the lyre with singing</Line>
        </Verse>
        <Verse name="two">
            <Line>Blow a shofar in the new moon</Line>
            <Line>and in the day of His festival</Line>
            <Line>
                For this is a law for <Yisrael />
            </Line>
            <Line>the ruling of our Elohim</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse name="three">
            <Line>
                Hear oh <Yisrael />, and let me warn you
            </Line>
            <Line>Give heed to the sound of my voice</Line>
            <Line>Open wide your mouth and He will fill it</Line>
            <Line>With finest goods He can satisfy you</Line>
        </Verse>
        <Verse name="four">
            <Line>Let there be no other one before you</Line>
            <Line>Do not bow to a foreign thing</Line>
            <Line>
                For <Yahweh />, your Elohim, He saved you
            </Line>
            <Line>His goodness can fill your being</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse repeat>
            <Line>
                For <Yahweh />, your Elohim, He saved you
            </Line>
            <Line>His goodness can fill your being</Line>
        </Verse>
    </Track>
)

export { Tehillah81 }
