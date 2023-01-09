import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'


import RootStackNavigator from "./RootStackNavigator"
import BottomStackNavigator from './MainStackNavigator';



const Navigation = () => {

  const state = useSelector((state)=> {
    const {isLoggedIn} = state.authReducer
    return {
      isLoggedIn
    }
  })


  return (
    <NavigationContainer>
     {state.isLoggedIn ?  <BottomStackNavigator/> : <RootStackNavigator/>}
    </NavigationContainer>
  )
}


export default Navigation
