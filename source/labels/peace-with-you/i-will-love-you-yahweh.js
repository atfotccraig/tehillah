import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahweh } from "app/components"

const IWillLoveYouYahweh = ({ fontSize }) => (
    <Fragment>
        I Will Love You <Yahweh fontSize={fontSize} />
    </Fragment>
)

IWillLoveYouYahweh.propTypes = {
    fontSize: PropTypes.number,
}

IWillLoveYouYahweh.defaultProps = {
    fontSize: undefined,
}

export { IWillLoveYouYahweh }
