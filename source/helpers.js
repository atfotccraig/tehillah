import { Platform } from "react-native"
import { css } from "styled-components/native"
import { Client } from "bugsnag-react-native"

const seconds = timestamp => {
    const parts = timestamp.split(":")

    const minutes = Number(parts[0]) * 60
    const seconds = Number(parts[1])

    return minutes + seconds
}

const relativeSize = (
    size,
    context,
    original = { width: 1024, height: 768 },
) => {
    // return Math.min(
    //     (context.width / original.width) * size,
    //     (context.height / original.height) * size,
    // )

    // ...we want to make this look better on smaller
    // screens so let's sacrifice vertical space to make
    // horizontal scaling better

    return (context.width / original.width) * size
}

const selectCss = (ios, android) => {
    return Platform.select({
        ios: css`
            ${ios}
        `,
        android: css`
            ${android}
        `,
    })
}

const joinWithOxford = items => {
    switch (items.length) {
        case 0: {
            return null
        }
        case 1: {
            return items[0]
        }
        case 2: {
            return items.join(" and ")
        }
        default: {
            const [last, ...rest] = items.slice(0).reverse()
            return rest.reverse().join(", ") + ", and " + last
        }
    }
}

const randomItem = items => {
    return items[Math.floor(Math.random() * items.length)]
}

const bugsnag = new Client("76f340b931b6023fa5a6c6b85c2b05d2")

const notify = error => {
    bugsnag.notify(error)
}

export { joinWithOxford, notify, randomItem, relativeSize, seconds, selectCss }
