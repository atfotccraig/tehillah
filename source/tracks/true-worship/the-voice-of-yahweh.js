import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const TheVoiceOfYahweh = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "00:34",
            "00:46",
            "00:58",
            "01:10",
            "01:22",
            "01:36",
            "01:59",
            "02:22",
            "02:35",
            "02:47",
            "02:59",
            "03:11",
            "03:23",
            "03:35",
            "03:48",
            "04:10",
            "04:34",
        ]}
        music="true_worship_the_voice_of_yahweh"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.TheVoiceOfYahweh />
        </Title>
        <Verse name="one">
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>is with power</Line>
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>is with greatness</Line>
        </Verse>
        <Verse name="two">
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>breaks the cedars</Line>
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>cuts through flames of fire</Line>
        </Verse>
        <Verse name="three">
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>shakes the wilderness</Line>
            <Line>
                The voice of <Yahweh />
            </Line>
            <Line>makes the deer to give birth</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse name="four" repeat>
            <Line>
                Ascribe to <Yahweh />
            </Line>
            <Line>sons of Almighty</Line>
            <Line>
                Ascribe to <Yahweh />
            </Line>
            <Line>esteem and strength</Line>
        </Verse>
        <Verse name="five" repeat>
            <Line>
                Bow down to <Yahweh />
            </Line>
            <Line>Bow down in the Set Apart Place</Line>
        </Verse>
        <Verse>
            <Line>For He reigns</Line>
            <Line>Yes He reigns</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat>
            <Line>For He reigns</Line>
        </Verse>
    </Track>
)

export { TheVoiceOfYahweh }
