import React, { Component } from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { NormalLightColor } from "app/colors"
import { HandDrawnArrowUp } from "app/icons"
import { SizeContext } from "app/context"
import { relativeSize, selectCss } from "app/helpers"

const Container = styled.View`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    padding-bottom: ${props => relativeSize(32, props.context)}px;
    padding-right: ${props => relativeSize(32, props.context)}px;
    width: 100%;
    height: 100%;
`

const AlignmentContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    ${selectCss(
        `font-family: Patrick Hand;`,
        `font-family: patrick_hand_regular;`,
    )};
    color: ${NormalLightColor};
    text-align: center;
`

const InstructionText = styled(Text)`
    font-size: ${props => relativeSize(32, props.context)}px;
    line-height: ${props => relativeSize(48, props.context)}px;
`

const Section = styled.View`
    padding-bottom: 24px;
`

class ScrollIntro extends Component {
    render() {
        return (
            <SizeContext.Consumer>
                {context => (
                    <Container context={context} pointerEvents="none">
                        <AlignmentContainer>
                            <Section>
                                <InstructionText context={context}>
                                    There are more
                                </InstructionText>
                                <InstructionText context={context}>
                                    songs below...
                                </InstructionText>
                            </Section>
                            <View
                                style={{
                                    transform: [{ rotate: "180deg" }],
                                }}
                            >
                                <HandDrawnArrowUp
                                    width={64}
                                    height={64}
                                    fill={NormalLightColor}
                                />
                            </View>
                        </AlignmentContainer>
                    </Container>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { ScrollIntro }
