import { Children } from "react"
import PropTypes from "prop-types"

const Repeat = ({ name, verses }) => {
    let found = null

    Children.forEach(verses, verse => {
        if (verse.props.name === name) {
            found = verse
        }
    })

    return found
}

Repeat.propTypes = {
    name: PropTypes.string.isRequired,
}

export { Repeat }
