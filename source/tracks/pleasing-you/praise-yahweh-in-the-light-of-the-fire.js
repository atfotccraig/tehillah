import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const PraiseYahwehInTheLightOfTheFire = props => (
    <Track
        cues={[
            "00:00",
            "00:20",
            "00:28",
            "00:40",
            "00:47",
            "00:57",
            "01:05",
            "01:13",
            "01:20",
            "01:31",
            "01:39",
            "01:47",
            "01:54",
            "02:05",
        ]}
        music="pleasing_you_praise_yahweh_in_the_light_of_the_fire"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.PraiseYahwehInTheLightOfTheFire />
        </Title>
        <Verse name="one">
            <Line>
                Praise <Yahweh /> in the light of the fire
            </Line>
            <Line>
                Praise <Yahweh /> in depths of the storm
            </Line>
        </Verse>
        <Verse name="two">
            <Line>
                Praise <Yahweh /> when things seem to tire
            </Line>
            <Line>
                Praise <Yahweh /> in the midst of it all
            </Line>
            <Line>
                Praise <Yahweh /> in the midst of it all
            </Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>When the battle seems long</Line>
            <Line>and the valley is low</Line>
            <Line>just lift up your hands</Line>
            <Line>and don’t be too slow</Line>
        </Verse>
        <Verse>
            <Line>Do it with speed</Line>
            <Line>and you will see</Line>
            <Line>that He’s right there with you</Line>
            <Line>to meet your need</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Everytime that it feels like</Line>
            <Line>you’re falling apart</Line>
            <Line>just know that He’s been there</Line>
            <Line>right from the start</Line>
        </Verse>
        <Verse>
            <Line>Everytime that you feel</Line>
            <Line>all alone and afraid</Line>
            <Line>just call on His name</Line>
            <Line>and you will be saved</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>
                Praise <Yahweh /> in the midst of it all
            </Line>
        </Verse>
    </Track>
)

export { PraiseYahwehInTheLightOfTheFire }
