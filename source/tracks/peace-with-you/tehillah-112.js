import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const Tehillah112 = props => (
    <Track
        cues={[
            "00:00",
            "00:05",
            "00:20",
            "00:36",
            "00:50",
            "01:09",
            "01:25",
            "01:40",
            "01:55",
            "02:10",
            "02:28",
            "02:36",
        ]}
        music="peace_with_you_tehillah_112"
        {...props}
    >
        <Title>
            <Labels.PeaceWithYou.Tehillah112 />
        </Title>
        <Verse name="one">
            <Line>Blessed is the man who fears Yah</Line>
            <Line>who delights himself in His commands</Line>
            <Line>Mighty is his seed in the earth</Line>
            <Line>The offspring of uprightness</Line>
        </Verse>
        <Verse name="two">
            <Line>Wealth and riches are in his house</Line>
            <Line>his righteousness forever will stand</Line>
            <Line>Light will arise in his darkness</Line>
            <Line>to him who shows favour</Line>
        </Verse>
        <Verse name="three">
            <Line>Good is the man who is generous</Line>
            <Line>His conduct shows righteousness</Line>
            <Line>He is not afraid of an evil report</Line>
            <Line>no, he is never shaken</Line>
        </Verse>
        <Verse name="four">
            <Line>His heart is steadfast, he trusts in Yah</Line>
            <Line>he is not afraid of his enemies</Line>
            <Line>He scatters abroad, he gives to the poor</Line>
            <Line>his right deeds endure forever</Line>
        </Verse>
        <Verse name="five">
            <Line>The wrong is vexed by this</Line>
            <Line>His desire wastes away</Line>
            <Line>But blessed is the man who fears Yah</Line>
            <Line>
                Praise <Yahweh />, He blesses him!
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse repeat>
            <Line>But blessed is the man who fears Yah</Line>
            <Line>
                Praise <Yahweh />, He blesses him!
            </Line>
        </Verse>
    </Track>
)

export { Tehillah112 }
