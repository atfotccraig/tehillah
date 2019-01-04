import React from "react"
import { Line, Repeat, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const ShabbatShalom = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:39",
            "00:48",
            "00:57",
            "01:15",
            "01:24",
            "01:33",
        ]}
        music="new_songs_shabbat_shalom"
        {...props}
    >
        <Title>
            <Labels.NewSongs.ShabbatShalom />
        </Title>
        <Verse repeat>
            <Line>Shabbat shalom, shabbat shalom</Line>
            <Line>Come enter the day of His rest</Line>
            <Line>Shabbat shalom, shabbat shalom</Line>
            <Line>Rejoice in the day He has blessed</Line>
        </Verse>
        <Verse name="two">
            <Line>Come gather together</Line>
            <Line>to seek out Yah’s presence</Line>
            <Line>Come give Him the praise due to Him</Line>
        </Verse>
        <Verse name="three">
            <Line>Find peace and refreshing</Line>
            <Line>and joy in the blessing</Line>
            <Line>that only His wisdom can bring</Line>
        </Verse>
        <Verse name="one">
            <Line>Shabbat shalom, shabbat shalom</Line>
            <Line>Come enter the day of His rest</Line>
            <Line>Shabbat shalom, shabbat shalom</Line>
            <Line>Rejoice in the day He has blessed</Line>
        </Verse>
        <Repeat name="two" />
        <Repeat name="three" />
        <Repeat name="one" />
    </Track>
)

export { ShabbatShalom }
