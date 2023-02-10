import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import * as Progress from "react-native-progress"
import MapView, { Marker } from 'react-native-maps'


export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant).restaurant;
  // console.log(restaurant.long)

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={34} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg"> Order Help </Text>
        </View>

        <View className=" bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className='flex-row justify-between'>
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: urlFor("http://links.papareact.com/fls"),
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar  size={30} indeterminate={true} color="#00CCBB" />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant.title}is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView 
        initialRegion={{
          latitude: restaurant.lat,
          longitude:restaurant.long,
          latitudeDelta:0.005,
          longitudeDelta:0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType="mutedStandard"
      
      >
        <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude:restaurant.long,
          }}
          title={restaurant.title}
          identifier='origin'
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
}
