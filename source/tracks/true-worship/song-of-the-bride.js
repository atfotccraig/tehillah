import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yahshua,
} from "app/components"

import Labels from "app/labels"

const SongOfTheBride = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:23",
            "00:35",
            "00:59",
            "01:11",
            "01:22",
            "02:09",
            "02:21",
            "02:33",
            "02:56",
            "03:08",
            "03:19",
            "04:05",
        ]}
        music="true_worship_song_of_the_bride"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.SongOfTheBride />
        </Title>
        <Verse name="one">
            <Line>Rise up bride of Messiah</Line>
            <Line>Rise up bride of the king</Line>
            <Line>Strip off your old, dirty garments</Line>
            <Line>It's time to wash and be clean</Line>
        </Verse>
        <Verse name="two">
            <Line>
                <Yahshua /> is coming to fetch us
            </Line>
            <Line>Hear the sound of the horn</Line>
            <Line>He invites us into His presence</Line>
            <Line>Can you see the lintel is torn?</Line>
        </Verse>
        <Verse name="three">
            <Line>Hosanna! Hosanna! Hosanna!</Line>
            <Line>The wedding feast has begun!</Line>
            <Line>Hosanna! Hosanna! Hosanna!</Line>
            <Line>We are the bride of the one!</Line>
        </Verse>
        <Verse name="four">
            <Line>Our husband stands in the garden</Line>
            <Line>He longs for the sound of our voice</Line>
            <Line>So lift up a new song to heaven</Line>
            <Line>and let all creation rejoice!</Line>
        </Verse>
        <Verse name="five">
            <Line>Oh Israel do you hear it?</Line>
            <Line>
                <Yahweh /> our saviour is one
            </Line>
            <Line>Our bridegroom has gone out before us</Line>
            <Line>and every battle He's won!</Line>
        </Verse>
        <Verse name="six" repeat>
            <Line>Hosanna! Hosanna! Hosanna!</Line>
            <Line>The wedding feast has begun!</Line>
            <Line>Hosanna! Hosanna! Hosanna!</Line>
            <Line>We are the bride of the one!</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Repeat name="six" />
        <Verse>
            <Line>The wedding feast has begun!</Line>
        </Verse>
    </Track>
)

export { SongOfTheBride }
