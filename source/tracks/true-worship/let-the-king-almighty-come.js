import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const LetTheKingAlmightyCome = props => (
    <Track
        cues={[
            "00:00",
            "00:22",
            "00:33",
            "00:44",
            "00:57",
            "01:08",
            "01:18",
            "01:31",
            "02:20",
            "02:43",
            "03:05",
            "03:27",
            "03:40",
            "04:28",
            "04:50",
            "05:12",
            "05:34",
        ]}
        music="true_worship_let_the_king_almighty_come"
        {...props}
    >
        <Title>
            <Labels.TrueWorship.LetTheKingAlmightyCome />
        </Title>
        <Verse name="one">
            <Line>This is the generation</Line>
            <Line>of those who live by faith</Line>
            <Line>This is the generation of</Line>
            <Line>those who seek His face</Line>
        </Verse>
        <Verse name="two">
            <Line>Lift up your heads, oh you gates</Line>
            <Line>Be lifted up, everlasting doors</Line>
        </Verse>
        <Verse name="three" repeat repeatText="x3">
            <Line>Let the King Almighty come!</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse name="four" repeat>
            <Line>Who is this Mighty King?</Line>
            <Line>Who is this about whom we sing?</Line>
            <Line>Who is this we adore?</Line>
            <Line>Who is this that we’re waiting for?</Line>
        </Verse>
        <Verse name="five">
            <Line>
                His Name is <Yahweh />, awesome and strong
            </Line>
            <Line>
                His Name is <Yahweh />, salvation’s song
            </Line>
            <Line>Let your life declare this song!</Line>
        </Verse>
        <Verse>
            <Line>
                His Name is <Yahweh />, oh He’s
            </Line>
            <Line>so awesome and strong</Line>
            <Line>
                You know His Name is <Yahweh />, salvation’s song
            </Line>
            <Line>Let your life declare this song!</Line>
        </Verse>
        <Verse name="six" repeat repeatText="x4">
            <Line>Let the gates be lifted</Line>
            <Line>the doors be opened</Line>
            <Line>and hearts receive Him in!</Line>
        </Verse>
        <Verse repeat>
            <Line>All hearts receive Him in</Line>
        </Verse>
        <Repeat name="four" />
        <Repeat name="five" />
        <Verse>
            <Line>
                His Name is <Yahweh />, oh He’s
            </Line>
            <Line>so awesome and strong</Line>
            <Line>
                I said His Name is <Yahweh />, salvation’s song
            </Line>
            <Line>Let your life declare this song!</Line>
        </Verse>
        <Repeat name="six" />
        <Verse repeat repeatText="x4">
            <Line>All hearts receive Him in</Line>
        </Verse>
    </Track>
)

export { LetTheKingAlmightyCome }
