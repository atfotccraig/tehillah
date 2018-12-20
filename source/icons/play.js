import React, { Component } from "react"
import PropTypes from "prop-types"
import Svg, { Path } from "react-native-svg"
import { SizeContext } from "app/context"
import { relativeSize } from "app/helpers"
import { AccentLightColor } from "app/colors"

class Play extends Component {
    static propTypes = {
        fill: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    static defaultProps = {
        fill: AccentLightColor,
        width: 28,
        height: 32,
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
                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        />
                    </Svg>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { Play }
