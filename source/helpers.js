import { Platform } from "react-native"
import { css } from "styled-components/native"

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
    return Math.min(
        (context.width / original.width) * size,
        (context.height / original.height) * size,
    )
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

export { joinWithOxford, randomItem, relativeSize, seconds, selectCss }
