import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const YouAreYahweh = ({ fontSize }) => (
    <Fragment>
        You are <Yahweh fontSize={fontSize} />
    </Fragment>
)

YouAreYahweh.propTypes = {
    fontSize: PropTypes.number,
}

YouAreYahweh.defaultProps = {
    fontSize: undefined,
}

export { YouAreYahweh }
