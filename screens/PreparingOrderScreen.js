import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"; 
import { View, Text, SafeAreaView } from 'react-native'; 
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"


export default function PreparingOrderScreen() {
  const navigation = useNavigation(); 

  useEffect(() => {
    // after 5 sec nav to home
    setTimeout(()=> {
      navigation.navigate('Delivery')
    }, 4000)
  },[])


  return (
    <SafeAreaView className='bg-[#ffffff] flex-1 justify-center items-center'>
      <Animatable.Image 
        source={require('../images/ggif.gif')}
        animation="slideInUp"
        iterationCount={1}
        className='h-100 w-96'
      />

      <Animatable.Text 
        animation="slideInUp"
        iterationCount={1}
        className='text-lg my-10 text-[#00CCBB] font-bold text-center '
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

    <Progress.Bar  size={60} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  )
}