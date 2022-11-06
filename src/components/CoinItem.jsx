import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RepositoryItemHeader = ({ name, symbol }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.subtitle}>{symbol}</Text>
        </View>
    </View>
)

const CoinItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12
    }
})

export default CoinItem
