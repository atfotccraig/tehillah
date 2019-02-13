import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah100 = props => (
    <Track
        cues={[
            "00:00",
            "00:21",
            "00:32",
            "00:43",
            "00:54",
            "01:04",
            "01:47",
            "02:09",
            "02:30",
            "02:42",
            "02:52",
            "03:03",
        ]}
        music="true_worship_tehillah_100"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.Tehillah100 />
        </Title>
        <Verse name="one">
            <Line>
                Raise a shout to <Yahweh />, all the earth!
            </Line>
            <Line>
                Raise a shout to <Yahweh />, all the earth!
            </Line>
        </Verse>
        <Verse name="two">
            <Line>Serve Him with gladness</Line>
            <Line>come before Him singing</Line>
            <Line>
                Know that <Yahweh /> is Elohim
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>For He has made us and we are His</Line>
            <Line>Yes He has made us and we are His</Line>
            <Line>Oh He has made us and we are His</Line>
            <Line>The sheep of His pasture are we</Line>
        </Verse>
        <Verse>
            <Line>Now enter in, into His gates</Line>
            <Line>with hearts overflowing with thanks</Line>
            <Line>And enter in, into His courts</Line>
            <Line>with mouths declaring His praise</Line>
        </Verse>
        <Verse>
            <Line>
                Give thanks to <Yahweh /> and bless His name
            </Line>
            <Line>For He is eternally good</Line>
            <Line>His loving-kindness is everlasting</Line>
            <Line>and His truth stands in all generations</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { Tehillah100 }
