import React from "react"
import { Line, Repeat, Track, Verse, Yahweh } from "../../components"

const WhoHeIs = props => (
    <Track
        cues={[
            "00:19",
            "00:36",
            "00:54",
            "01:02",
            "01:10",
            "01:20",
            "01:28",
            "02:02",
            "02:38",
            "02:55",
        ]}
        music="because_of_the_lamb_who_he_is"
        {...props}
    >
        <Verse name="three">
            <Line>
                <Yahweh /> up in heaven
            </Line>
            <Line>He knows you by name</Line>
            <Line>
                <Yahweh /> on this earth
            </Line>
            <Line>He takes away shame</Line>
        </Verse>
        <Verse name="four">
            <Line>
                <Yahweh />, He is waiting
            </Line>
            <Line>with arms open wide</Line>
            <Line>
                <Yahweh />, He is knocking
            </Line>
            <Line>will you let Him inside?</Line>
        </Verse>
        <Verse name="one">
            <Line>His name is Almighty</Line>
            <Line>His name is Divine</Line>
            <Line>His banner is love</Line>
            <Line>His purpose to shine</Line>
        </Verse>
        <Verse name="two">
            <Line>A light in the darkness</Line>
            <Line>magnificent one</Line>
            <Line>Our blessed redeemer</Line>
            <Line>the wonderful son</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>And He's mighty!</Line>
            <Line>Lift your voice to the king</Line>
            <Line>And He's worthy!</Line>
            <Line>Can you hear angels sing?</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah! Halleluyah!</Line>
            <Line>To the one who made</Line>
            <Line>heaven and earth</Line>
            <Line>Halleluyah! Halleluyah!</Line>
            <Line>Come rise up and declare</Line>
            <Line>His great worth!</Line>
        </Verse>
        <Repeat name="three" />
        <Repeat name="four" />
    </Track>
)

export { WhoHeIs }
