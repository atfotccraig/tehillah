import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const YahwehWhoMovesMountains = ({ fontSize }) => (
    <Fragment>
        <Yahweh fontSize={fontSize} /> Who Moves Mountains
    </Fragment>
)

YahwehWhoMovesMountains.propTypes = {
    fontSize: PropTypes.number,
}

YahwehWhoMovesMountains.defaultProps = {
    fontSize: undefined,
}

export { YahwehWhoMovesMountains }
