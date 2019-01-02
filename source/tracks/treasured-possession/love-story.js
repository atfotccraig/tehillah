import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahshua,
    Yahweh,
} from "app/components"

import Labels from "app/labels"

const LoveStory = props => (
    <Track
        cues={[
            "00:00",
            "00:39",
            "00:52",
            "01:04",
            "01:26",
            "01:38",
            "01:50",
            "02:11",
            "02:23",
            "02:35",
            "02:56",
            "03:08",
            "03:19",
            "03:41",
            "03:52",
            "04:04",
            "04:25",
            "05:03",
            "05:16",
        ]}
        music="treasured_possession_love_story"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.LoveStory />
        </Title>
        <Verse>
            <Line>Let me tell you of a story that I heard</Line>
            <Line>Of the greatest love the world has known</Line>
        </Verse>
        <Verse>
            <Line>It began deep in the heart of everything</Line>
            <Line>and it lasts long past all history</Line>
        </Verse>
        <Verse repeat name="one">
            <Line>It’s the story of creation</Line>
            <Line>It’s the story of salvation</Line>
        </Verse>
        <Verse>
            <Line>There was One who chose</Line>
            <Line>a girl to be His wife</Line>
            <Line>She was brought up</Line>
            <Line>in a world that had no life</Line>
        </Verse>
        <Verse>
            <Line>So He showed her what it meant to be alive</Line>
            <Line>and he brought her to a place</Line>
            <Line>where she was safe</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>Then an enemy set out to take His place</Line>
            <Line>and he promised her</Line>
            <Line>that He would make it safe</Line>
        </Verse>
        <Verse>
            <Line>But it meant that He</Line>
            <Line>would have to go away</Line>
            <Line>So He hedged her in</Line>
            <Line>and asked her just to stay</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>As He went away on His quest</Line>
            <Line>To once, for all, take care of the rest</Line>
        </Verse>
        <Verse>
            <Line>She wandered off, she left the nest</Line>
            <Line>Forgot the way, got lost, distressed</Line>
        </Verse>
        <Repeat name="one" />
        <Verse>
            <Line>So the enemy took capture of the girl</Line>
            <Line>She believed his lies, gave in to whim</Line>
        </Verse>
        <Verse>
            <Line>So the One returned</Line>
            <Line>to find His love in chains</Line>
            <Line>Had to give His life, pay the ransom</Line>
        </Verse>
        <Repeat name="one" />
        <Verse />
        <Verse>
            <Line>Here’s the story</Line>
            <Line>of the greatest love on earth</Line>
            <Line>Of the One who died for the one who lived</Line>
        </Verse>
        <Verse>
            <Line>And He rose again and will return</Line>
            <Line>For His bride, He saved, He’ll come again</Line>
        </Verse>
    </Track>
)

export { LoveStory }
