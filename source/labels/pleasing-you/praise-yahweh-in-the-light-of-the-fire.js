import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const PraiseYahwehInTheLightOfTheFire = ({ fontSize }) => (
    <Fragment>
        Praise <Yahweh fontSize={fontSize} /> In The Light Of the Fire
    </Fragment>
)

PraiseYahwehInTheLightOfTheFire.propTypes = {
    fontSize: PropTypes.number,
}

PraiseYahwehInTheLightOfTheFire.defaultProps = {
    fontSize: undefined,
}

export { PraiseYahwehInTheLightOfTheFire }
