import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const KingJosiah = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:23",
            "00:35",
            "00:49",
            "01:01",
            "01:16",
            "01:28",
            "01:40",
            "01:54",
            "02:06",
            "02:18",
            "02:30",
            "02:44",
        ]}
        music="true_worship_king_josiah"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.KingJosiah />
        </Title>
        <Verse>
            <Line>King Josiah found the book</Line>
            <Line>
                of the covenant of <Yahweh />
            </Line>
            <Line>And king Josiah asked the priest</Line>
            <Line>“What does the teaching say?”</Line>
        </Verse>
        <Verse>
            <Line>And when he found that he’d transgressed</Line>
            <Line>the way the book had said to live</Line>
            <Line>he fell down on his face and cried</Line>
            <Line>
                “<Yahweh />, please forgive!”
            </Line>
        </Verse>
        <Verse>
            <Line>Then he made a solemn oath to live</Line>
            <Line>by the teaching of the Word</Line>
            <Line>And he promised that he’d lead the land</Line>
            <Line>by the truth of what he’d heard</Line>
        </Verse>
        <Verse name="one">
            <Line>I want to live like king Josiah</Line>
            <Line>by the truth of what you say</Line>
            <Line>tearing down the idols</Line>
            <Line>that are standing in my way</Line>
        </Verse>
        <Verse name="two">
            <Line>I want to chase down Your instruction</Line>
            <Line>with everything in me</Line>
            <Line>
                Come remove the veil, <Yahweh />
            </Line>
            <Line>teach me how to see</Line>
        </Verse>
        <Verse>
            <Line>Now that I have seen the truth</Line>
            <Line>let me never turn away</Line>
            <Line>Keep my feet upon Your path</Line>
            <Line>every night and day</Line>
        </Verse>
        <Verse>
            <Line>And when I find that I transgress the way</Line>
            <Line>the book has said to live</Line>
            <Line>I’ll fall down on my face and cry</Line>
            <Line>
                “<Yahweh />, please forgive!”
            </Line>
        </Verse>
        <Verse>
            <Line>And I will make a solemn oath to live</Line>
            <Line>by the teaching of the Word</Line>
            <Line>And I promise I will be a light</Line>
            <Line>shining in the world</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat repeatText="x3">
            <Line>I need to see, I need to know</Line>
            <Line>I need to live, I need to go</Line>
        </Verse>
    </Track>
)

export { KingJosiah }
