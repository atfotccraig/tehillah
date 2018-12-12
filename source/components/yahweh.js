import React from "react"
import styled from "styled-components/native"
import { relativeSize, selectCss } from "../helpers"

const Text = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif Hebrew; font-weight: 700;`,
        `font-family: noto_serif_hebrew_bold;`,
    )};
    font-size: ${({ size }) =>
        size ? relativeSize(size) : relativeSize(55)}px;
`

const Yahweh = ({ size }) => <Text size={size}>יהוה</Text>

export { Yahweh }
