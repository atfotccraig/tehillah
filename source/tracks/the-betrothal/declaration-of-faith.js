import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const DeclarationOfFaith = props => (
    <Track
        cues={["00:00", "00:21", "00:43", "01:05", "01:49", "02:11", "02:32"]}
        music="the_betrothal_declaration_of_faith"
        {...props}
    >
        <Title>
            <Labels.TheBetrothal.DeclarationOfFaith />
        </Title>
        <Verse>
            <Line>I will offer my life</Line>
            <Line>without any qualms</Line>
            <Line>And fight for my kin</Line>
            <Line>my brothers in arms</Line>
        </Verse>
        <Verse>
            <Line>I will strengthen my hands</Line>
            <Line>stand firm on my feet</Line>
            <Line>For with you on our side</Line>
            <Line>we’ll never be beat</Line>
        </Verse>
        <Verse repeat>
            <Line>Your joy gives me strength</Line>
            <Line>Your grace makes me stand</Line>
            <Line>Knowing that I</Line>
            <Line>am safe in your hand</Line>
        </Verse>
        <Verse>
            <Line>I will go forth in praise</Line>
            <Line>with hands lifted high</Line>
            <Line>And in my time of need</Line>
            <Line>I look to the sky</Line>
        </Verse>
        <Verse>
            <Line>I will stand on your truth</Line>
            <Line>I’ll never back down</Line>
            <Line>For you are my song</Line>
            <Line>the king of renown</Line>
        </Verse>
        <Verse repeat>
            <Line>Your banner is raised</Line>
            <Line>Your righteousness shines</Line>
            <Line>And I’ll bend my knee</Line>
            <Line>as Your fire refines</Line>
        </Verse>
    </Track>
)

export { DeclarationOfFaith }
