import React from 'react'
import { FlatList, Text } from 'react-native'
import coins from '../data/coins.js'
import CoinItem from './CoinItem.jsx'

const CoinList = () => {
  return (
    <FlatList
      data={coins}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: coin }) => (
        <CoinItem {...coin} />
      )}
    />
  )
}

export default CoinList
