import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"

const TheRockThatIStandOn = props => (
    <Track
        cues={[
            "00:00",
            "00:42",
            "01:04",
            "01:26",
            "02:03",
            "02:42",
            "03:03",
            "03:25",
            "04:45",
        ]}
        music="peace_with_you_the_rock_that_i_stand_on"
        {...props}
    >
        <Title>The Rock That I Stand On</Title>
        <Verse>
            <Line>Even when the windmill never turns</Line>
            <Line>Even when we’re trampled in defeat</Line>
            <Line>Even when the hurt inside me burns</Line>
            <Line>Even when the truth lies</Line>
            <Line>scattered in the streets</Line>
        </Verse>
        <Verse>
            <Line>Even when it seems like evil boasts</Line>
            <Line>Even when it looks like justice fails</Line>
            <Line>Even when beloved Tsiyon mourns</Line>
            <Line>Even when you hear</Line>
            <Line>the echoes of her wails</Line>
        </Verse>
        <Verse>
            <Line>This is the Rock that I stand on</Line>
            <Line>When the storm comes I’ll be firm</Line>
            <Line>The compassions of Yah never cease</Line>
            <Line>In His presence He promises peace</Line>
        </Verse>
        <Verse />
        <Verse>
            <Line>He says He holds creation in His hands</Line>
            <Line>He says that in the battle we must stand</Line>
            <Line>He says He’ll rise with healing in His wings</Line>
            <Line>And truth will be the one</Line>
            <Line>to overcomes these things</Line>
        </Verse>
        <Verse>
            <Line>He says humility is everything</Line>
            <Line>He says the just shall live in steadfastness</Line>
            <Line>He says that He will comfort the mourning</Line>
            <Line>and all we’ll hear is</Line>
            <Line>songs resounding joyfulness</Line>
        </Verse>
        <Verse repeat>
            <Line>This is the Rock that I stand on</Line>
            <Line>When the storm comes I’ll be firm</Line>
            <Line>The compassions of Yah never cease</Line>
            <Line>In His presence He promises peace</Line>
        </Verse>
        <Verse />
    </Track>
)

export { TheRockThatIStandOn }
