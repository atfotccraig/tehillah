import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const WhenYahwehComes = ({ fontSize }) => (
    <Fragment>
        When <Yahweh fontSize={fontSize} /> Comes
    </Fragment>
)

WhenYahwehComes.propTypes = {
    fontSize: PropTypes.number,
}

WhenYahwehComes.defaultProps = {
    fontSize: undefined,
}

export { WhenYahwehComes }
