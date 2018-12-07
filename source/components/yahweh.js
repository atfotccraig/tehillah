import React from "react"
import styled from "styled-components/native"

const Text = styled.Text`
    font-family: "Noto Serif Hebrew";
    font-size: ${({ size }) => (size ? `${size}px` : "55px")};
    font-weight: 700;
    writing-direction: ltr;
`

const Yahweh = ({ size }) => <Text size={size}>יהוה</Text>

export { Yahweh }
