import {Text, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import React from 'react';
import store from '../Redux/store';
import { taskAdded, taskRemoved, taskCompleted } from '../Redux/actions';
import { Provider } from 'react-redux';

export default function CarItem() {
  console.log('ok lets do it:');
  const unsubcribe = store.subscribe(()=>{
    console.log('store changed: ',store.getState());
  })

  store.dispatch(taskAdded('first task'));
  store.dispatch(taskAdded('second task'));
  // store.dispatch(taskRemoved(1));
  store.dispatch(taskCompleted(1));
  return (
    <Provider>
      <SafeAreaView style={tw`bg-slate-600 h-full`}>
        <Text style={tw`bg-blue-100 p-2`}>Hello, Cong Nguyen Thanhdd!</Text>
      </SafeAreaView>
    </Provider>
    
  )
}