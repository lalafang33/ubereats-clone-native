import React, {useLayoutEffect } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    })
  },[])

  return (
    <SafeAreaView>
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-centered">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-grey-300 p-4 rounded-full"
          />
          <View>
            <Text className='text-red-500'> Deliver Now!</Text>
            <Text>Current Location</Text> 
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

// const styles = {
//   text: {
//     color: 'red'
//   },
//   image: {
//     height: 30,
//     width: 30,
//     backgroundColor: 'gray',
//     borderRadius: 25,
//     padding: 4
//   }
// }