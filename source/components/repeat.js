import { Children } from "react"

const Repeat = ({ name, verses }) => {
    let found = null

    Children.forEach(verses, verse => {
        if (verse.props.name === name) {
            found = verse
        }
    })

    return found
}

export { Repeat }
