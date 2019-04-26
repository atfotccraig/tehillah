import React from "react"
import { Line, Repeat, Title, Track, Verse, Yisrael } from "app/components"
import Labels from "app/labels"

const ShepherdOfYisrael = props => (
    <Track
        cues={[
            "00:00",
            "00:03",
            "00:33",
            "01:03",
            "01:33",
            "02:03",
            "02:32",
            "03:01",
            "03:30",
            "04:29",
        ]}
        music="treasured_possession_shepherd_of_yisrael"
        {...props}
    >
        <Title>
            <Labels.TreasuredPossession.ShepherdOfYisrael />
        </Title>
        <Verse>
            <Line>Your presence fills the heavens</Line>
            <Line>on this earth You are all I desire</Line>
            <Line>In the mighty grip of Your hand</Line>
            <Line>I am always with You, I am safe</Line>
        </Verse>
        <Verse name="one">
            <Line>You who dwell, in set-apartness</Line>
            <Line>Oh shine forth, Shepherd of Tsiyon</Line>
            <Line>Look from heaven, give ear to my cry</Line>
            <Line>Come visit us, the Rock of my heart</Line>
        </Verse>
        <Verse>
            <Line>You’re my refuge and my fortress</Line>
            <Line>my only comfort in times of distress</Line>
            <Line>Let Your face Yah, shine upon us</Line>
            <Line>turn us back so that we may be saved</Line>
        </Verse>
        <Verse name="two">
            <Line>I lift my eyes, to the heavens</Line>
            <Line>Unto You, who dwell on high</Line>
            <Line>In constant hope, to hear You calling</Line>
            <Line>When You stand, in the Promised Land</Line>
        </Verse>
        <Verse>
            <Line>
                Oh hope of <Yisrael />, to us show favour
            </Line>
            <Line>only You bring my being to life</Line>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in You</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>
                Oh hope of <Yisrael />, to us show favour
            </Line>
            <Line>only You bring my being to life</Line>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in You</Line>
        </Verse>
        <Verse>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in You</Line>
        </Verse>
    </Track>
)

export { ShepherdOfYisrael }
