import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillim149 = props => (
    <Track
        cues={[
            "00:00",
            "00:19",
            "00:28",
            "00:36",
            "00:45",
            "00:52",
            "01:02",
            "01:10",
            "01:19",
            "01:27",
            "01:36",
            "01:44",
            "01:53",
        ]}
        music="humble_offerings_tehillim_149"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.Tehillim149 />
        </Title>
        <Verse name="one">
            <Line>
                Praise <Yahweh /> all the earth!
            </Line>
            <Line>Sing a new song to Him</Line>
            <Line>lovingly-committed ones</Line>
            <Line>Praise Him in the Set-Apart place</Line>
        </Verse>
        <Verse name="two">
            <Line>Rejoice in Your Maker</Line>
            <Line>oh children of Tsiyon</Line>
            <Line>Exult in Your Sovereign today</Line>
        </Verse>
        <Verse name="three">
            <Line>Praise His Name in a dance!</Line>
            <Line>Sing praises to Him</Line>
            <Line>with the tambourine and lyre</Line>
            <Line>
                For <Yahweh />
                ’s deliverance has come
            </Line>
        </Verse>
        <Verse name="four">
            <Line>He takes pleasure in us</Line>
            <Line>when we humbly approach Him</Line>
            <Line>with a song of adoration</Line>
        </Verse>
        <Verse name="five">
            <Line>Exalt Elohim with your mouth!</Line>
            <Line>He executes vengeance</Line>
            <Line>on all of the nations</Line>
            <Line>He binds up their sovereigns with chains</Line>
        </Verse>
        <Verse>
            <Line>His written right-ruling</Line>
            <Line>is always before Him</Line>
            <Line>A splendour to his set-apart ones</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat>
            <Line>His written right-ruling</Line>
            <Line>is always before Him</Line>
            <Line>A splendour to his set-apart ones</Line>
        </Verse>
    </Track>
)

export { Tehillim149 }
