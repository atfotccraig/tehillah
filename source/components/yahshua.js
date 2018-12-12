import React, { Fragment } from "react"
import styled from "styled-components/native"
import { relativeSize, selectCss } from "../helpers"

const InvisibleText = styled.Text`
    color: #fdfdfd;
    font-size: 0px;
`

const HebrewText = styled.Text`
    ${selectCss(
        `writing-direction: ltr; font-family: Noto Serif Hebrew; font-weight: 700;`,
        `font-family: noto_serif_hebrew_bold;`,
    )};
    font-size: ${({ size }) =>
        size ? relativeSize(size) : relativeSize(55)}px;
`

const Yahshua = ({ size }) => (
    <Fragment>
        <InvisibleText>f</InvisibleText>
        <HebrewText size={size}>יהושע</HebrewText>
    </Fragment>
)

export { Yahshua }
