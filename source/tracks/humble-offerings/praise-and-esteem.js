import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const PraiseAndEsteem = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:35",
            "00:51",
            "01:10",
            "01:42",
            "02:16",
            "02:33",
            "02:51",
            "03:23",
        ]}
        music="humble_offerings_praise_and_esteem"
        {...props}
    >
        <Title>
            <Labels.HumbleOfferings.PraiseAndEsteem />
        </Title>
        <Verse name="one">
            <Line>
                Praise and esteem belong to <Yahweh />
            </Line>
            <Line>Praise and esteem belong to our king</Line>
            <Line>
                Praise and esteem belong to <Yahweh />
            </Line>
            <Line>Praise and esteem belong to our king</Line>
        </Verse>
        <Verse name="two">
            <Line>This is my Elohim</Line>
            <Line>To Him and Him alone will I sing</Line>
            <Line>This is my Elohim</Line>
            <Line>To Him and Him alone will I sing</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat name="three">
            <Line>The mountains will fall</Line>
            <Line>Every hill and high place be made low</Line>
            <Line>And yet through it all</Line>
            <Line>There’s one thing my heart truly knows</Line>
        </Verse>
        <Verse repeat name="four">
            <Line>
                Praise and esteem belong to <Yahweh />
            </Line>
            <Line>Praise and esteem belong to our king</Line>
            <Line>
                Praise and esteem belong to <Yahweh />
            </Line>
            <Line>Praise and esteem belong to our king</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="three" />
        <Repeat name="four" />
    </Track>
)

export { PraiseAndEsteem }
