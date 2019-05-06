import React from "react"
import { Line, Title, Track, Verse } from "app/components"
import Labels from "app/labels"

const WhatWillYouSay = props => (
    <Track
        cues={[
            "00:00",
            "00:26",
            "00:48",
            "01:09",
            "01:56",
            "02:19",
            "02:39",
            "03:26",
        ]}
        music="pleasing_you_what_will_you_say"
        {...props}
    >
        <Title>
            <Labels.PleasingYou.WhatWillYouSay />
        </Title>
        <Verse>
            <Line>When the skies have rolled away</Line>
            <Line>and I stand before Your throne</Line>
            <Line>When Your rule and reign</Line>
            <Line>is here to stay</Line>
            <Line>What will You say?</Line>
        </Verse>
        <Verse>
            <Line>When Your fire clears the dross away</Line>
            <Line>and my deeds are burnt as hay</Line>
            <Line>If my life I did not give to You</Line>
            <Line>there’s no way to pay</Line>
        </Verse>
        <Verse repeat>
            <Line>Please do not let me be led astray</Line>
            <Line>as I follow in Your Way</Line>
            <Line>Every word You speak is truth</Line>
            <Line>From my heart I will obey</Line>
        </Verse>
        <Verse>
            <Line>If I give all that I have to give</Line>
            <Line>but my love faded away</Line>
            <Line>If my mouth curses the man you made</Line>
            <Line>how will I pray?</Line>
        </Verse>
        <Verse>
            <Line>When the mirror shows the better way</Line>
            <Line>and my being stands exposed</Line>
            <Line>Will I humbly bow to discipline</Line>
            <Line>or will my heart betray?</Line>
        </Verse>
        <Verse repeat>
            <Line>Let my life be found in You</Line>
            <Line>and my deeds be done for You</Line>
            <Line>For without You I have none</Line>
            <Line>My salvation is undone</Line>
        </Verse>
        <Verse>
            <Line>When I come before You face-to-face</Line>
            <Line>and my life is on display</Line>
            <Line>When I give account of all I’ve done</Line>
            <Line>what will You say?</Line>
        </Verse>
    </Track>
)

export { WhatWillYouSay }
