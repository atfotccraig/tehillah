import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const AllOrNothing = props => (
    <Track
        cues={["00:00", "00:19", "00:42", "01:04", "01:26", "01:47"]}
        music="wonderful_maker_all_or_nothing"
        {...props}
    >
        <Title>
            <Labels.WonderfulMaker.AllOrNothing />
        </Title>
        <Verse>
            <Line>Hear am I, send me</Line>
            <Line>My life is not my own anymore</Line>
            <Line>Shine Your light in me</Line>
            <Line>I am undone without Your Truth</Line>
        </Verse>
        <Verse>
            <Line>The only thing I’m sure of</Line>
            <Line>is that You do not change</Line>
            <Line>Your faithfulness is everlasting</Line>
            <Line>You alone deserve my trust</Line>
        </Verse>
        <Verse>
            <Line>I will go from here</Line>
            <Line>I know You’re watching</Line>
            <Line>from Your throne</Line>
            <Line>I will walk in peace</Line>
            <Line>My crookedness is washed away</Line>
        </Verse>
        <Verse>
            <Line>For hearing ears and seeing eyes</Line>
            <Line>My heart knows that’s Your desire</Line>
            <Line>I cry aloud for steadfastness</Line>
            <Line>so that You’ll be esteemed</Line>
        </Verse>
        <Verse repeat>
            <Line>So let my life be counted worthy</Line>
            <Line>only in Your service</Line>
            <Line>To bear witness of Your favour</Line>
            <Line>Let Your will be done in me</Line>
        </Verse>
    </Track>
)

export { AllOrNothing }
