import React from "react"
import { Yahweh } from "../../../components"

const YahwehsBlessing = ({ Wrapper, number, size }) => (
    <Wrapper>
        {number ? number + ". " : null} <Yahweh size={size} />
        ’s Blessing
    </Wrapper>
)

export { YahwehsBlessing }
