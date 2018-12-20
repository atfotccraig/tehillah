import { createContext } from "react"

const SizeContext = createContext({ width: 0, height: 0 })

const IsPlayListContext = createContext(false)

const IsRandomContext = createContext(false)

export { IsPlayListContext, IsRandomContext, SizeContext }
