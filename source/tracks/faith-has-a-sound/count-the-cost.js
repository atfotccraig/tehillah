import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const CountTheCost = props => (
    <Track
        cues={[
            "00:00",
            "00:12",
            "00:23",
            "00:35",
            "00:46",
            "01:09",
            "01:19",
            "01:31",
            "01:43",
            "01:54",
            "02:05",
            "02:18",
            "02:29",
            "02:40",
            "03:02",
            "03:13",
            "03:24",
            "03:36",
            "03:47",
            "03:58",
        ]}
        music="faith_has_a_sound_count_the_cost"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.CountTheCost />
        </Title>
        <Verse>
            <Line>I know that we’ve been called</Line>
            <Line>for such a time as this</Line>
            <Line>To come before the king</Line>
            <Line>in fear and lowliness</Line>
        </Verse>
        <Verse>
            <Line>To stand before His throne</Line>
            <Line>to plead for those condemned</Line>
            <Line>To humbly make the case</Line>
            <Line>and ask if He’d relent</Line>
        </Verse>
        <Verse>
            <Line>For judgement was decreed</Line>
            <Line>the verdict did decide</Line>
            <Line>affliction would come swift</Line>
            <Line>There’d be no place to hide</Line>
        </Verse>
        <Verse>
            <Line>But we can enter in</Line>
            <Line>if we would count the cost</Line>
            <Line>and ask the king for grace</Line>
            <Line>that no one would be lost</Line>
            <Line>No one would be lost</Line>
        </Verse>
        <Verse name="one">
            <Line>I’ll count the cost</Line>
            <Line>and I will give it all away</Line>
            <Line>if it means that just one person</Line>
            <Line>will be there with me that day</Line>
        </Verse>
        <Verse name="two">
            <Line>When Messiah comes to rule</Line>
            <Line>and He establishes His reign</Line>
            <Line>I don’t want to stand before Him</Line>
            <Line>and hang my head in shame</Line>
        </Verse>
        <Verse name="three">
            <Line>If my life it must be forfeit</Line>
            <Line>let me not give up the fight</Line>
            <Line>For I know my saviour’s waiting</Line>
            <Line>in His power and His might</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Verse />
        <Verse>
            <Line>You are the one who came</Line>
            <Line>for such a time as this</Line>
            <Line>You gave your life away</Line>
            <Line>in love and lowliness</Line>
        </Verse>
        <Verse>
            <Line>You’re seated on the throne</Line>
            <Line>you plead for those condemned</Line>
            <Line>So all who call on you</Line>
            <Line>will be with you in the end</Line>
            <Line>Will be with you in the end</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>If my life it must be forfeit</Line>
            <Line>let me not give up the fight</Line>
            <Line>For I know my saviour’s waiting</Line>
            <Line>in His power and His might</Line>
        </Verse>
    </Track>
)

export { CountTheCost }
