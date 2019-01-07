import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YouTakeMyBreathAway = props => (
    <Track
        cues={[
            "00:00",
            "00:20",
            "00:32",
            "00:44",
            "00:55",
            "01:10",
            "01:22",
            "01:36",
            "02:28",
            "02:40",
            "02:52",
            "03:03",
            "03:18",
            "03:29",
            "03:43",
            "04:55",
        ]}
        music="wonderful_maker_you_take_my_breath_away"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.YouTakeMyBreathAway />
        </Title>
        <Verse>
            <Line>I see a sky of deepest blue</Line>
            <Line>I hear the wind as it sings to you</Line>
        </Verse>
        <Verse>
            <Line>I could never dream up</Line>
            <Line>shades of green</Line>
            <Line>as in the trees and</Line>
            <Line>the meadows are seen</Line>
        </Verse>
        <Verse>
            <Line>And even in the blackest night</Line>
            <Line>I see your face</Line>
            <Line>as the stars give off their light</Line>
        </Verse>
        <Verse>
            <Line>The tallest mountain standing proud</Line>
            <Line>declares your wonder</Line>
            <Line>and majesty out loud</Line>
        </Verse>
        <Verse name="one">
            <Line>And I wonder</Line>
            <Line>did you do this all for me?</Line>
            <Line>And I wonder</Line>
            <Line>about the beauty that I see</Line>
        </Verse>
        <Verse name="two">
            <Line>And I wonder</Line>
            <Line>did you do this all for me?</Line>
            <Line>And I wonder</Line>
            <Line>are these your fingerprints I see?</Line>
        </Verse>
        <Verse repeat>
            <Line>You take my breath away</Line>
            <Line>I’m humbled and amazed</Line>
            <Line>You take my breath away</Line>
            <Line>My heart is bowed</Line>
            <Line>my hands are raised</Line>
        </Verse>
        <Verse>
            <Line>The gentlest flower, soft and sweet</Line>
            <Line>The bird that sings</Line>
            <Line>with a chirp and with a tweet</Line>
        </Verse>
        <Verse>
            <Line>A rainbow painted in the sky</Line>
            <Line>follows the rumble</Line>
            <Line>of thunder rolling by</Line>
        </Verse>
        <Verse>
            <Line>I’ve watched the eagle in its flight</Line>
            <Line>Who softly and silently</Line>
            <Line>displays your wondrous might</Line>
        </Verse>
        <Verse>
            <Line>All creation with one voice</Line>
            <Line>sings your praise</Line>
            <Line>and presents to me a choice</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>You take my breath away</Line>
            <Line>I’m humbled and amazed</Line>
            <Line>You take my breath away</Line>
            <Line>My heart is bowed</Line>
            <Line>my hands are raised</Line>
        </Verse>
        <Verse>
            <Line>You take my breath away</Line>
        </Verse>
    </Track>
)

export { YouTakeMyBreathAway }
