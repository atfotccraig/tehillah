import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const Tehillim65 = props => (
    <Track
        cues={[
            "00:00",
            "00:23",
            "00:44",
            "01:06",
            "01:33",
            "01:48",
            "02:02",
            "02:17",
            "02:32",
            "02:46",
            "03:04",
        ]}
        music="living_waters_tehillim_65"
        {...props}
    >
        <Title>
            <Labels.LivingWaters.Tehillim65 />
        </Title>
        <Verse>
            <Line>To You, stillness</Line>
            <Line>praise in Zion, Oh Elohim</Line>
            <Line>And to You a vow is paid</Line>
        </Verse>
        <Verse>
            <Line>To You, who hears all prayer</Line>
            <Line>all flesh comes in Zion, Oh Elohim</Line>
            <Line>And to You my vow is made</Line>
        </Verse>
        <Verse>
            <Line>Crooked matters were mightier than I</Line>
            <Line>But my transgressions</Line>
            <Line>You hid them from Your eyes</Line>
            <Line>You cover them</Line>
        </Verse>
        <Verse name="one">
            <Line>Blessed is the one You choose</Line>
            <Line>And whom You bring into Your courts</Line>
            <Line>Daily we are satisfied</Line>
            <Line>With the fullness of Your house</Line>
        </Verse>
        <Verse name="two">
            <Line>By awesome deeds in righteousness</Line>
            <Line>Oh Elohim deliver us</Line>
            <Line>You, the Trust of all the earth</Line>
            <Line>Unto the distant seas</Line>
        </Verse>
        <Verse name="three">
            <Line>Establish mountains by Your strength</Line>
            <Line>Still the roaring of the waves</Line>
            <Line>Let the people come and fear</Line>
            <Line>When they see Your awesome deeds</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse>
            <Line>Blessed is the one You choose</Line>
            <Line>And whom You bring into Your courts</Line>
            <Line>Daily we are satisfied</Line>
        </Verse>
    </Track>
)

export { Tehillim65 }
