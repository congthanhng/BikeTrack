import {Text, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import React from 'react';

export default function CarItem() {
  return (
    <SafeAreaView style={tw`bg-slate-600 h-full`}>
      <Text style={tw`bg-blue-100 p-2`}>Hello, Cong Nguyen Thanh!</Text>
    </SafeAreaView>
  )
}