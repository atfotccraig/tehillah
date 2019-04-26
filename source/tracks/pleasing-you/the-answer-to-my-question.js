import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const TheAnswerToMyQuestion = props => (
    <Track
        cues={[
            "00:00",
            "00:20",
            "00:29",
            "00:38",
            "00:47",
            "00:55",
            "01:13",
            "01:30",
            "01:49",
            "01:58",
            "02:07",
            "02:16",
            "02:24",
            "02:41",
            "02:58",
        ]}
        music="pleasing_you_the_answer_to_my_question"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.TheAnswerToMyQuestion />
        </Title>
        <Verse>
            <Line>Sometimes I don’t know</Line>
            <Line>who I’m supposed to be</Line>
            <Line>Surviving each day</Line>
            <Line>am I meant to be free?</Line>
        </Verse>
        <Verse>
            <Line>Feeling the cords</Line>
            <Line>of this world choke me up</Line>
            <Line>I don’t know how to let go</Line>
        </Verse>
        <Verse>
            <Line>I stumble, I fall</Line>
            <Line>from Your narrow way</Line>
            <Line>So many times</Line>
            <Line>I don’t know what to say</Line>
        </Verse>
        <Verse>
            <Line>How do I pick up the pieces again?</Line>
            <Line>I don’t know where to begin</Line>
        </Verse>
        <Verse>
            <Line>But You call out my name</Line>
            <Line>and You reach out Your hand</Line>
            <Line>Then You pull me to my feet</Line>
            <Line>and You teach me how to stand</Line>
        </Verse>
        <Verse>
            <Line>Yes You call out my name</Line>
            <Line>and You reach out Your hand</Line>
            <Line>Then You pull me to my feet</Line>
            <Line>and You teach me how to stand</Line>
        </Verse>
        <Verse repeat>
            <Line>Wash me clean, make me strong</Line>
            <Line>to oppose all that is wrong</Line>
        </Verse>
        <Verse>
            <Line>Once I was lost</Line>
            <Line>and alone in the dark</Line>
            <Line>but now You have given</Line>
            <Line>a light for my path</Line>
        </Verse>
        <Verse>
            <Line>My eyes have been opened</Line>
            <Line>and my ears have heard</Line>
            <Line>The life that is found in Your Word</Line>
        </Verse>
        <Verse>
            <Line>I moved out of darkness</Line>
            <Line>and into the sun</Line>
            <Line>Now that I know</Line>
            <Line>that the battle is won</Line>
        </Verse>
        <Verse>
            <Line>You paid the price</Line>
            <Line>to redeem me from sin</Line>
            <Line>This is where my life begins</Line>
        </Verse>
        <Verse>
            <Line>When You called out my name</Line>
            <Line>and You reached out Your hand</Line>
            <Line>Then You pulled me to my feet</Line>
            <Line>and You taught me how to stand</Line>
        </Verse>
        <Verse>
            <Line>Yes You called out my name</Line>
            <Line>and You reached out Your hand</Line>
            <Line>Then You pulled me to my feet</Line>
            <Line>and You taught me how to stand</Line>
        </Verse>
        <Verse>
            <Line>Now I stand</Line>
        </Verse>
    </Track>
)

export { TheAnswerToMyQuestion }
