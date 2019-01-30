import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const FaithHasASound = props => (
    <Track
        cues={[
            "00:00",
            "00:17",
            "00:35",
            "00:53",
            "01:13",
            "01:30",
            "01:52",
            "02:10",
            "02:36",
            "02:49",
            "03:10",
            "03:26",
            "03:43",
            "04:04",
        ]}
        music="faith_has_a_sound_faith_has_a_sound"
        {...props}
    >
        <Title>
            <Labels.FaithHasASound.FaithHasASound />
        </Title>
        <Verse>
            <Line>There is a sound that rises up</Line>
            <Line>like thunder in the air</Line>
        </Verse>
        <Verse>
            <Line>It pierces through dark</Line>
            <Line>and it resounds</Line>
            <Line>from here to everywhere</Line>
        </Verse>
        <Verse>
            <Line>It rushes in my ears</Line>
            <Line>It penetrates my soul</Line>
            <Line>It makes me lift my eyes</Line>
            <Line>and look towards my goal</Line>
        </Verse>
        <Verse>
            <Line>It’s not the voice of reason</Line>
            <Line>it’s not a common thing</Line>
            <Line>But when you hear it clearly</Line>
            <Line>you’ll see your life begin</Line>
        </Verse>
        <Verse>
            <Line>And in your drought and famine</Line>
            <Line>when all is stripped away</Line>
            <Line>the sound of faith will take you</Line>
            <Line>to a brand new day</Line>
        </Verse>
        <Verse name="one">
            <Line>Faith has a sound</Line>
            <Line>Faith has a sound</Line>
            <Line>Faith says I cannot see what’s coming</Line>
            <Line>but I’ll stand my ground</Line>
        </Verse>
        <Verse name="two">
            <Line>Faith whispers soft</Line>
            <Line>Faith screams out loud</Line>
            <Line>Faith sings a song of love to Yah</Line>
            <Line>Faith has a sound</Line>
        </Verse>
        <Verse />
        <Verse>
            <Line>It’s a sound that I know</Line>
            <Line>yet it’s something new</Line>
            <Line>and as it fills my life</Line>
            <Line>It tells all that’s true</Line>
        </Verse>
        <Verse>
            <Line>And I will listen now</Line>
            <Line>see dead men waking up</Line>
            <Line>only you know how</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse>
            <Line>Faith has a sound</Line>
            <Line>Faith has a sound</Line>
            <Line>Your faith has a sound</Line>
            <Line>Faith has a sound</Line>
        </Verse>
    </Track>
)

export { FaithHasASound }
