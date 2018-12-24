import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const SetMeFree = props => (
    <Track
        cues={["00:00", "00:10", "00:33", "00:59", "01:22", "01:45", "02:33"]}
        music="refined_set_me_free"
        {...props}
    >
        <Title>
            <Labels.Refined.SetMeFree />
        </Title>
        <Verse>
            <Line>When this world becomes too much to bear</Line>
            <Line>I come to you in prayer</Line>
            <Line>When my soul just can’t take the suffering</Line>
            <Line>I ask you, Yah, do you care?</Line>
        </Verse>
        <Verse>
            <Line>Can you hear the outcry in my heart?</Line>
            <Line>When it feels like there’s no way to turn</Line>
            <Line>You’re the only one to take the pain</Line>
            <Line>will you save me?</Line>
        </Verse>
        <Verse>
            <Line>When my hope has left me all alone</Line>
            <Line>I come to you in prayer</Line>
            <Line>In my deepest place I know</Line>
            <Line>you’re always near</Line>
            <Line>I beg you, Yah, find me there</Line>
        </Verse>
        <Verse>
            <Line>Please don’t turn your face away from me</Line>
            <Line>Take me home to everlasting peace</Line>
            <Line>There is nothing left for me right here</Line>
            <Line>will you save me?</Line>
        </Verse>
        <Verse repeat>
            <Line>Set me free, set me free, set me free</Line>
            <Line>From these chains that choke</Line>
            <Line>the life from me</Line>
            <Line>From this burden that’s too much for me</Line>
            <Line>Set me free</Line>
        </Verse>
        <Verse repeat repeatText="x8">
            <Line>Set me free, set me free, set me free</Line>
        </Verse>
    </Track>
)

export { SetMeFree }
