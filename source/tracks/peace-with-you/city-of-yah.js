import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const CityOfYah = props => (
    <Track
        cues={[
            "00:00",
            "00:02",
            "00:41",
            "00:59",
            "01:17",
            "01:35",
            "01:53",
            "02:11",
            "02:29",
        ]}
        music="peace_with_you_city_of_yah"
        {...props}
    >
        <Title>City Of Yah</Title>
        <Verse name="one" repeat>
            <Line>I will not fear, I will have faith</Line>
            <Line>
                I will trust in my maker, <Yahweh />
            </Line>
            <Line>In Elohim, whose word I praise</Line>
            <Line>Oh, what can man do to me?</Line>
        </Verse>
        <Verse>
            <Line>Yerushalayim is trodden down</Line>
            <Line>Her enemies think they have won</Line>
            <Line>The chosen city lies in ruins</Line>
            <Line>The way of peace is gone</Line>
        </Verse>
        <Verse name="two">
            <Line>Behold! Your redeemer is coming!</Line>
            <Line>In compassion He’ll build you back up</Line>
            <Line>
                Be excited, oh dwelling of <Yahweh />!
            </Line>
            <Line>￼￼He is coming to live in your midst</Line>
        </Verse>
        <Verse name="three">
            <Line>He’ll make your officers peace</Line>
            <Line>and your magistrates righteousness</Line>
            <Line>Salvation your walls</Line>
            <Line>and your gates will be praise</Line>
            <Line>
                Master <Yahweh /> your eternal light
            </Line>
        </Verse>
        <Verse>
            <Line>I will not fear, I will have faith</Line>
            <Line>
                I will trust in my maker, <Yahweh />
            </Line>
            <Line>In Elohim, whose word I praise</Line>
            <Line>Oh, what can man do to me?</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
    </Track>
)

export { CityOfYah }
