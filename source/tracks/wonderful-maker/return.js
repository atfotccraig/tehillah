import React from "react"
import { Line, Title, Track, Verse, Yahweh, Yisrael } from "app/components"
import Labels from "app/labels"

const Return = props => (
    <Track
        cues={["00:00", "00:05", "00:22", "00:39", "00:55", "01:11"]}
        music="wonderful_maker_return"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.Return />
        </Title>
        <Verse>
            <Line>
                <Yahweh />, forgive me
            </Line>
            <Line>accept my off’ring</Line>
            <Line>Heal my backsliding</Line>
            <Line>love me spontaneously</Line>
        </Verse>
        <Verse>
            <Line>In Your compassion</Line>
            <Line>wipe out my bloodguilt</Line>
            <Line>As dew in sunrise</Line>
            <Line>like chaff blown in the wind</Line>
        </Verse>
        <Verse>
            <Line>Spread out my branches</Line>
            <Line>restore my splendour</Line>
            <Line>
                Let <Yisrael /> blossom
            </Line>
            <Line>revived and green</Line>
        </Verse>
        <Verse>
            <Line>
                Return to <Yahweh />
            </Line>
            <Line>confess transgressions</Line>
            <Line>He comes in kindness</Line>
            <Line>draw near to Him</Line>
        </Verse>
        <Verse repeat>
            <Line>
                Rejoice in <Yahweh />
            </Line>
            <Line>children of Tsiyon</Line>
            <Line>the rain will come down</Line>
            <Line>blow the shofar</Line>
        </Verse>
    </Track>
)

export { Return }
