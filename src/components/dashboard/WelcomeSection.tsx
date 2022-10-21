import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WelcomeSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello, John S.</Text>
            <Text style={styles.welcome}>Welcome in Moneylia</Text>
        </View>
    )
}

export default WelcomeSection

const styles = StyleSheet.create({
    container: {
        height: 193,
        backgroundColor: "#7476ED",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingLeft: 16,
        paddingTop: 10,
        paddingRight: 16
    },
    hello: {
        fontSize: 32,
        fontWeight: "400",
        color: "#ffffff"
    },
    welcome: {
        fontSize: 14,
        fontWeight: "400",
        color: "#ffffff"
    }
})
