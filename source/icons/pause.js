import React, { Component } from "react"
import PropTypes from "prop-types"
import Svg, { Path } from "react-native-svg"
import { SizeContext } from "app/context"
import { relativeSize } from "app/helpers"
import { AccentLightColor } from "app/colors"

class Pause extends Component {
    static propTypes = {
        fill: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    static defaultProps = {
        fill: AccentLightColor,
        width: 31.5,
        height: 36,
    }

    render() {
        const { fill, width, height } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Svg
                        viewBox="0 0 448 512"
                        width={relativeSize(width, context)}
                        height={relativeSize(height, context)}
                    >
                        <Path
                            fill={fill}
                            d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
                        />
                    </Svg>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Pause }
