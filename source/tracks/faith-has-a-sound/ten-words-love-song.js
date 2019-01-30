import React from "react"
import { Line, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const TenWordsLoveSong = props => (
    <Track
        cues={[
            "00:00",
            "00:13",
            "00:29",
            "00:42",
            "01:14",
            "01:28",
            "01:49",
            "02:06",
            "02:33",
            "03:00",
        ]}
        music="faith_has_a_sound_ten_words_love_song"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.TenWordsLoveSong />
        </Title>
        <Verse>
            <Line>And Elohim spoke all these words, saying</Line>
            <Line>
                I am <Yahweh />, your Elohim, who brought you
            </Line>
            <Line>out of the land of Mitsrayim</Line>
            <Line>out of the house of slavery</Line>
        </Verse>
        <Verse>
            <Line>You shall have no other gods</Line>
            <Line>before My face</Line>
            <Line>You shall not worship them</Line>
            <Line>in any time or place</Line>
        </Verse>
        <Verse repeat>
            <Line>
                For I am <Yahweh />, your jealous El
            </Line>
            <Line>Love me only that I might do you well</Line>
        </Verse>
        <Verse>
            <Line>You shall not bring</Line>
            <Line>the name of Elohim to naught</Line>
            <Line>You shall keep the sabbath day</Line>
            <Line>it’s set apart</Line>
        </Verse>
        <Verse>
            <Line>In six days I made the heaven</Line>
            <Line>and the earth and the sea</Line>
            <Line>And I made you to look like me</Line>
            <Line>to look like me</Line>
        </Verse>
        <Verse>
            <Line>You shall respect and you shall honour</Line>
            <Line>your father and your mother</Line>
            <Line>You shall not take</Line>
            <Line>the life of your brother</Line>
            <Line>of your brother</Line>
        </Verse>
        <Verse repeat>
            <Line>Do not commit adultery</Line>
            <Line>Do not steal, do not lie</Line>
            <Line>You shall put these things</Line>
            <Line>so far away from your eyes</Line>
        </Verse>
        <Verse repeat>
            <Line>You do not want</Line>
            <Line>what doesn’t belong to you</Line>
            <Line>You only want to do what I want you to</Line>
            <Line>You are my greatest love</Line>
            <Line>the apple of my eye</Line>
        </Verse>
        <Verse repeat>
            <Line>You are my greatest love</Line>
            <Line>the apple of my eye</Line>
        </Verse>
    </Track>
)

export { TenWordsLoveSong }
