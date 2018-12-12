import React, { Fragment } from "react"
import { Text } from "react-native"
import { Yahweh } from "../../../components"

const YahwehWhoMovesMountains = ({ Wrapper, number, size }) => (
    <Fragment>
        <Wrapper>{number ? number + ". " : null}</Wrapper>
        <Text> </Text>
        <Yahweh size={size} />
        <Text> </Text>
        <Wrapper>Who Moves Mountains</Wrapper>
    </Fragment>
)

export { YahwehWhoMovesMountains }
