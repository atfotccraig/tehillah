import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const OurComingKing = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:29",
            "00:43",
            "00:55",
            "01:09",
            "01:22",
            "01:35",
            "01:47",
            "02:02",
            "02:14",
            "02:27",
            "02:40",
            "02:52",
            "03:05",
            "03:17",
        ]}
        music="true_worship_our_coming_king"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.OurComingKing />
        </Title>
        <Verse name="one">
            <Line>The King is looking down on earth</Line>
            <Line>He’s seated on the throne</Line>
            <Line>To Him we lift our voices high</Line>
            <Line>We worship Him alone</Line>
        </Verse>
        <Verse name="two">
            <Line>He’s the Mighty One of heaven</Line>
            <Line>the One that we adore</Line>
            <Line>
                We’ll praise the worthy Name of <Yahweh />
            </Line>
            <Line>now and ever more</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>And even though the earth</Line>
            <Line>is filled with evil</Line>
            <Line>And even though it seems like darkness</Line>
            <Line>tramples out the light</Line>
        </Verse>
        <Verse>
            <Line>And even though it sometimes feels</Line>
            <Line>like there’s no hope</Line>
            <Line>our King prepares to rise</Line>
            <Line>in all His might</Line>
        </Verse>
        <Verse name="three">
            <Line>The splendour of His righteousness</Line>
            <Line>will fill the earth once more</Line>
            <Line>And we will be restored to Him</Line>
            <Line>just like we were before</Line>
        </Verse>
        <Verse name="four">
            <Line>For a time it may appear</Line>
            <Line>that darkness overcame</Line>
            <Line>but wait and see as Elohim</Line>
            <Line>restores His righteous Name</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
        <Verse name="five">
            <Line>The earth again will bow</Line>
            <Line>before the father</Line>
            <Line>Unrighteousness be slain before</Line>
            <Line>the splendour of His face</Line>
        </Verse>
        <Verse name="six">
            <Line>And hope will rise</Line>
            <Line>and love will be our banner</Line>
            <Line>
                as <Yahweh /> comes with His amazing grace
            </Line>
        </Verse>
        <Repeat name="five" />
        <Repeat name="six" />
        <Verse repeat>
            <Line>
                As <Yahweh /> comes with His amazing grace
            </Line>
        </Verse>
    </Track>
)

export { OurComingKing }
