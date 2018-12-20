import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const YahwehsBlessing = ({ fontSize }) => (
    <Fragment>
        <Yahweh fontSize={fontSize} />
        ’s Blessing
    </Fragment>
)

YahwehsBlessing.propTypes = {
    fontSize: PropTypes.number,
}

YahwehsBlessing.defaultProps = {
    fontSize: undefined,
}

export { YahwehsBlessing }
