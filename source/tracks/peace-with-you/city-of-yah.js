import React from "react"
import { Line, Repeat, Title, Track, Verse, Yahweh } from "../../components"

const CityOfYah = props => (
    <Track
        cues={["00:00", "00:05"]}
        music="peace_with_you_city_of_yah"
        {...props}
    >
        <Title>City Of Yah</Title>
        <Verse>
            <Line>words</Line>
        </Verse>
    </Track>
)

export { CityOfYah }
