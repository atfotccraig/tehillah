import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Yahshua } from "app/components"

const ComeYahshuaCome = ({ fontSize }) => (
    <Fragment>
        Come <Yahshua fontSize={fontSize} /> Come
    </Fragment>
)

ComeYahshuaCome.propTypes = {
    fontSize: PropTypes.number,
}

ComeYahshuaCome.defaultProps = {
    fontSize: undefined,
}

export { ComeYahshuaCome }
