import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"

const ATimeForEverything = props => (
    <Track
        cues={[
            "00:00",
            "00:29",
            "00:49",
            "01:10",
            "01:31",
            "01:54",
            "02:16",
            "02:38",
            "03:00",
        ]}
        music="peace_with_you_a_time_for_everything"
        {...props}
    >
        <Title>A Time For Everything</Title>
        <Verse>
            <Line>There is a time for everything</Line>
            <Line>for mourning cry, for joy to sing</Line>
            <Line>to seek, to find, for hope it brings</Line>
            <Line>for life, for death, for war and peace</Line>
        </Verse>
        <Verse>
            <Line>So help me do the best I can</Line>
            <Line>to walk with you ‘cording to plan</Line>
            <Line>Fight the good fight, finish the race</Line>
            <Line>and not to end in second place</Line>
        </Verse>
        <Verse>
            <Line>There is a time for everything</Line>
            <Line>for all these things we get our chance</Line>
            <Line>to hurt, to heal, for forgiving</Line>
            <Line>to weep, to laugh, to mourn, to dance</Line>
        </Verse>
        <Verse>
            <Line>Thank you for all that’s from your hand</Line>
            <Line>Give me all I need to stand</Line>
            <Line>Faith to hold fast and unfeigned love</Line>
            <Line>knowing you lead from above</Line>
        </Verse>
        <Verse name="one">
            <Line>You gave me life to play my part</Line>
            <Line>to worship you with all my heart</Line>
            <Line>This precious time I will not waste</Line>
            <Line>for all my deeds there’s time and place</Line>
        </Verse>
        <Verse name="two">
            <Line>And when I stand before your face</Line>
            <Line>I hope to say “I’ve run the race”</Line>
            <Line>That you will take me by the hand</Line>
            <Line>and say “Well done! It’s like we planned”</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { ATimeForEverything }
