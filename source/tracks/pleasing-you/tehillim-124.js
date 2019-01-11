import React from "react"

import {
    Line,
    Repeat,
    Title,
    Track,
    Verse,
    Yahweh,
    Yisrael,
} from "app/components"

import Labels from "app/labels"

const Tehillim124 = props => (
    <Track
        cues={[
            "00:00",
            "00:15",
            "00:33",
            "00:49",
            "01:06",
            "01:22",
            "01:38",
            "01:55",
            "02:11",
        ]}
        music="pleasing_you_tehillim_124"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.Tehillim124 />
        </Title>
        <Verse name="one" repeat>
            <Line>
                Luley <Yahweh /> shehayah lanu
            </Line>
            <Line>
                yomar nah <Yisrael />
            </Line>
        </Verse>
        <Verse name="two" repeat>
            <Line>
                Ezreynu b’shem <Yahweh />
            </Line>
            <Line>oseh shamayim va’aretz</Line>
        </Verse>
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
        <Repeat name="one" />
        <Repeat name="two" />
    </Track>
)

export { Tehillim124 }
