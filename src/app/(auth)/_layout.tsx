import { Stack } from 'expo-router'
import React from 'react'

const AuthStack = () => {
  return (
   <Stack screenOptions={{headerShown:false}}>
     <Stack.Screen name="index"/>
     <Stack.Screen name="Terms_agree"/>
     <Stack.Screen name="Login"/>
     <Stack.Screen name="Verify_otp"/>
   </Stack>
  )
}

export default AuthStack