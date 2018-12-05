import React from "react"
import { StatusBar, View } from "react-native"
import { PrayUntilSomethingHappens } from "./tracks/because-of-the-lamb"

const App = () => {
    return (
        <View>
            <StatusBar hidden />
            <PrayUntilSomethingHappens isAnimating isPlaying />
        </View>
    )
}

export { App }
