import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const SongOfDeliverance = props => (
    <Track
        cues={[
            "00:00",
            "00:18",
            "00:39",
            "01:00",
            "01:20",
            "01:41",
            "02:02",
            "02:22",
            "04:04",
        ]}
        music="new_songs_song_of_deliverance"
        {...props}
    >
        <Title>
            <Labels.NewSongs.SongOfDeliverance />
        </Title>
        <Verse>
            <Line>Set me as a seal upon your heart</Line>
            <Line>Look to me as the apple of your eye</Line>
            <Line>Never, ever let me go</Line>
        </Verse>
        <Verse>
            <Line>Speak to the heavens</Line>
            <Line>and they answer the earth</Line>
            <Line>And make Your creatures</Line>
            <Line>lie down in peace</Line>
            <Line>Speak Your life into their heart</Line>
        </Verse>
        <Verse name="one">
            <Line>You are my hiding place</Line>
            <Line>You surround me with</Line>
            <Line>songs of deliverance</Line>
        </Verse>
        <Verse>
            <Line>A love everlasting do I have for you</Line>
            <Line>Betrothed and favoured as I promised to</Line>
            <Line>Never will I let you go</Line>
        </Verse>
        <Verse>
            <Line>The rivers clap their hands</Line>
            <Line>and the mountains sing for joy</Line>
            <Line>The heavens rejoice</Line>
            <Line>and the earth is glad</Line>
            <Line>Everything is in my hand</Line>
        </Verse>
        <Repeat name="one" />
        <Verse repeat repeatText="x5">
            <Line>Rise up my love, my beautiful one</Line>
            <Line>The winter is past, the rain, it has gone</Line>
            <Line>The time of singing has come</Line>
        </Verse>
        <Verse repeat>
            <Line>Rise, beloved, the time has come</Line>
        </Verse>
    </Track>
)

export { SongOfDeliverance }
