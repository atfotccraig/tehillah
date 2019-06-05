import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const YoureAllINeed = props => (
    <Track
        cues={[
            "00:00",
            "00:16",
            "00:35",
            "00:55",
            "01:15",
            "01:54",
            "02:33",
            "03:28",
        ]}
        music="new_songs_youre_all_i_need"
        {...props}
    >
        <Title>
            <Labels.NewSongs.YoureAllINeed />
        </Title>
        <Verse>
            <Line>I hear the power of Your strength</Line>
            <Line>in the thunder of the heavens</Line>
            <Line>I feel the tenderness in You</Line>
            <Line>in the comfort of a hug</Line>
        </Verse>
        <Verse>
            <Line>The beauty of the setting sun</Line>
            <Line>is the promise of Your faithfulness</Line>
            <Line>The smell of tender falling rains</Line>
            <Line>bring new life to all on earth</Line>
        </Verse>
        <Verse>
            <Line>How can I live without You</Line>
            <Line>El Shaddai, You’re all I need</Line>
            <Line>You show kindness and compassion</Line>
            <Line>You’re my Saviour and my King</Line>
        </Verse>
        <Verse repeat>
            <Line>You raise me up, You set me free</Line>
            <Line>You give me hope eternal</Line>
            <Line>You bring me near, You still my fear</Line>
            <Line>I know I can trust in You</Line>
        </Verse>
        <Verse repeat>
            <Line>How can I live without You</Line>
            <Line>El Shaddai, You’re all I need</Line>
            <Line>You show kindness and compassion</Line>
            <Line>You’re my Saviour and my King</Line>
        </Verse>
        <Verse repeat repeatText="x3">
            <Line>You raise me up, You set me free</Line>
            <Line>You give me hope eternal</Line>
            <Line>You bring me near, You still my fear</Line>
            <Line>I know I can trust in You</Line>
        </Verse>
        <Verse repeat>
            <Line>I know I can trust in You</Line>
        </Verse>
    </Track>
)

export { YoureAllINeed }
