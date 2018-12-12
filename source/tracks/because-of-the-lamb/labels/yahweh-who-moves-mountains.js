import React from "react"
import { Yahweh } from "../../../components"

const YahwehWhoMovesMountains = ({ Wrapper, number, size }) => (
    <Wrapper>
        {number ? number + ". " : null} <Yahweh size={size} /> Who Moves
        Mountains
    </Wrapper>
)

export { YahwehWhoMovesMountains }
