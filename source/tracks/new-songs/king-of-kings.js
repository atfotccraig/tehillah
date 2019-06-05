import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "app/components"
import Labels from "app/labels"

const KingOfKings = props => (
    <Track
        cues={[
            "00:00",
            "00:04",
            "00:16",
            "00:30",
            "00:55",
            "01:07",
            "01:20",
            "02:10",
            "02:23",
            "02:48",
        ]}
        music="new_songs_king_of_kings"
        {...props}
    >
        <Title>
            <Labels.NewSongs.KingOfKings />
        </Title>
        <Verse>
            <Line>We praise You, Yah</Line>
            <Line>Most High Elohim</Line>
            <Line>Our Saviour and</Line>
            <Line>our Beloved King</Line>
        </Verse>
        <Verse>
            <Line>With our lives we bring</Line>
            <Line>an offering</Line>
            <Line>
                And to You, <Yahweh />
            </Line>
            <Line>our voices sing</Line>
        </Verse>
        <Verse name="one">
            <Line>Halleluyah to the King</Line>
            <Line>Yah’shua, to You we sing</Line>
            <Line>Hearts rejoice in thanksgiving</Line>
            <Line>Halleluyah to the King!</Line>
        </Verse>
        <Verse>
            <Line>We bless You, Yah</Line>
            <Line>The King of kings</Line>
            <Line>With a humble voice</Line>
            <Line>of praise we sing</Line>
        </Verse>
        <Verse>
            <Line>As we walk this earth</Line>
            <Line>we’re sojourning</Line>
            <Line>With the Heaven’s hosts</Line>
            <Line>the echoes ring</Line>
        </Verse>
        <Verse repeat>
            <Line>Halleluyah to the King</Line>
            <Line>Yah’shua, to You we sing</Line>
            <Line>Hearts rejoice in thanksgiving</Line>
            <Line>Halleluyah to the King!</Line>
        </Verse>
        <Verse name="two">
            <Line>Halleluyah to the King</Line>
            <Line>Yah’shua, to You we sing</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { KingOfKings }
