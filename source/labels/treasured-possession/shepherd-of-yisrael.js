import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yisrael } from "app/components"

const ShepherdOfYisrael = ({ fontSize }) => (
    <Fragment>
        Shepherd Of <Yisrael fontSize={fontSize} />
    </Fragment>
)

ShepherdOfYisrael.propTypes = {
    fontSize: PropTypes.number,
}

ShepherdOfYisrael.defaultProps = {
    fontSize: undefined,
}

export { ShepherdOfYisrael }
