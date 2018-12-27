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
            <Line>on this earth you are all I desire</Line>
            <Line>In the mighty grip of your hand</Line>
            <Line>I am always with you, I am safe</Line>
        </Verse>
        <Verse name="one">
            <Line>You who dwell, in set-apartness</Line>
            <Line>Oh shine forth, shepherd of Tsiyon</Line>
            <Line>Look from heaven, give ear to my cry</Line>
            <Line>Come visit us, the rock of my heart</Line>
        </Verse>
        <Verse>
            <Line>You’re my refuge and my fortress</Line>
            <Line>my only comfort in times of distress</Line>
            <Line>Let your face Yah, shine upon us</Line>
            <Line>turn us back so that we may be saved</Line>
        </Verse>
        <Verse name="two">
            <Line>I lift my eyes, to the heavens</Line>
            <Line>Unto you, who dwell on high</Line>
            <Line>In constant hope, to hear you calling</Line>
            <Line>When you stand, in the promised land</Line>
        </Verse>
        <Verse>
            <Line>
                Oh hope of <Yisrael />, to us show favour
            </Line>
            <Line>only you bring my being to life</Line>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in you</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Verse repeat>
            <Line>
                Oh hope of <Yisrael />, to us show favour
            </Line>
            <Line>only you bring my being to life</Line>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in you</Line>
        </Verse>
        <Verse>
            <Line>You surround me with loving-kindness</Line>
            <Line>in joy and peace I find shelter in you</Line>
        </Verse>
    </Track>
)

export { ShepherdOfYisrael }
