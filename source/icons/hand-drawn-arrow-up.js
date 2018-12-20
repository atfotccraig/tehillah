import React, { Component } from "react"
import PropTypes from "prop-types"
import Svg, { Path } from "react-native-svg"
import { SizeContext } from "app/context"
import { relativeSize } from "app/helpers"
import { AccentLightColor } from "app/colors"

class HandDrawnArrowUp extends Component {
    static propTypes = {
        fill: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    static defaultProps = {
        fill: AccentLightColor,
        width: 36,
        height: 36,
    }

    render() {
        const { fill, width, height } = this.props

        return (
            <SizeContext.Consumer>
                {context => (
                    <Svg
                        viewBox="0 0 383.582 383.582"
                        width={relativeSize(width, context)}
                        height={relativeSize(height, context)}
                    >
                        <Path
                            fill={fill}
                            d="M297.125,337.67c-3.672-33.66-13.464-65.484-24.48-97.309c-4.896-13.464-9.792-28.151-15.3-42.228
                            c6.732-0.612,13.464-2.448,20.196-3.061c2.447,0,4.896-1.224,6.12-3.672c4.283-8.567,9.18-18.972,9.18-29.375
                            c0-3.061-1.224-5.509-2.448-7.345c1.225-1.836,1.225-4.284,0.612-6.731c4.284-2.448,6.731-7.956,2.448-12.853
                            c-38.557-42.84-72.828-88.739-109.548-132.804c-2.448-3.06-8.568-3.06-11.016,0c-37.944,44.064-54.468,100.98-85.68,148.716
                            c-1.224,1.836-1.224,4.284,0,5.508c0,0.612,0,1.225,0,1.836c-1.836,14.688,2.448,29.376,15.3,37.944
                            c6.732,4.284,17.748,6.731,26.928,4.896c-7.956,46.513-15.3,93.024-25.092,139.536v0.612c-0.612,0.612,0,1.836,0,3.06
                            c0.612,1.836,1.224,3.672,3.06,4.896c7.344,11.628,22.644,34.884,31.824,34.271c21.42-1.224,42.84-1.224,64.26-2.447
                            c30.601-1.836,80.173-4.284,92.412-39.168C296.513,341.955,297.736,340.119,297.125,337.67z M273.257,180.999
                            c-6.732,0.612-13.464,1.224-19.584,3.06c-0.612,0-1.225,0.612-1.836,0.612c-4.896-9.792-9.792-19.584-15.3-28.152
                            c14.075,1.225,28.764,1.836,42.84,1.836C281.213,165.699,276.316,174.266,273.257,180.999z M125.153,188.955
                            c-4.896,1.224-10.404,0-14.688-1.836c-9.18-4.284-13.464-13.464-14.076-22.645c7.344,0.612,15.3,1.225,22.644,1.836
                            c4.896,0,10.404,1.225,15.912,0.612c-1.224,6.732-2.448,14.076-3.672,20.808C129.437,187.73,127.601,188.342,125.153,188.955z
                             M146.573,162.027c1.836-3.061,1.224-7.345-1.836-9.181c-7.344-4.284-17.136-1.836-25.092-1.836c-6.12,0-12.24,0.612-18.36,1.225
                            c31.212-40.393,45.288-91.188,77.112-131.58c33.048,41.004,65.484,83.844,100.98,123.624c-17.137,0-34.884,0.611-52.021,2.447
                            c-3.06,0.612-4.284,2.448-4.896,4.284c-1.225,1.225-1.836,3.061-1.225,4.896c7.956,29.987,25.093,58.752,36.108,88.128
                            c9.792,25.703,16.524,52.632,22.644,78.947c-47.124-17.748-110.16,9.792-159.731,12.24
                            C133.109,278.918,143.513,220.167,146.573,162.027z M188.188,368.27c-14.076,0.612-28.152,0.612-41.616,1.225
                            c-7.956,0.611-17.748-8.568-25.092-17.137c53.856-0.611,104.652-20.195,158.508-12.24
                            C268.36,368.882,212.669,367.046,188.188,368.27z"
                        />
                    </Svg>
                )}
            </SizeContext.Consumer>
        )
    }
}

export { HandDrawnArrowUp }