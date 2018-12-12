import React, { Fragment } from "react"
import { Text } from "react-native"
import { Yahweh } from "../../../components"

const YahwehsBlessing = ({ Wrapper, number, size }) => (
    <Fragment>
        <Wrapper>{number ? number + ". " : null}</Wrapper>
        <Text> </Text>
        <Yahweh size={size} />
        <Text> </Text>
        <Wrapper>’s Blessing</Wrapper>
    </Fragment>
)

export { YahwehsBlessing }
