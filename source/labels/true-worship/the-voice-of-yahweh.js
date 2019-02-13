import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const TheVoiceOfYahweh = ({ fontSize }) => (
    <Fragment>
        The Voice Of <Yahweh fontSize={fontSize} />
    </Fragment>
)

TheVoiceOfYahweh.propTypes = {
    fontSize: PropTypes.number,
}

TheVoiceOfYahweh.defaultProps = {
    fontSize: undefined,
}

export { TheVoiceOfYahweh }
