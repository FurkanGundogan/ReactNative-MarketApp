import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {
    const navigation= useNavigation()
    useEffect(() => {

    setTimeout(() => {
        navigation.navigate("Delivry")
    }, 1000);
    }, [])
    
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#00CCBB]">
  
      <Animatable.Image
      source={require("../rider.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-64 w-64"
      >
      </Animatable.Image>
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
      >
            Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white"></Progress.Circle>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen