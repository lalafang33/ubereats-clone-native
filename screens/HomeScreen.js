import React, {useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories.js';
import { 
  ChevronDownIcon,
  UserIcon, 
  MagnifyingGlassIcon, 
  AdjustmentsVerticalIcon, 
} from "react-native-heroicons/outline"
import FeaturedRow from '../components/FeaturedRow.js';
import sanityClient from '../sanity.js';



export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    })
  },[])

  // using sanity query to get all the featured rest, where it reloads comp only once after screenloads
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->,
       
      },
    }`)
    .then(data => {
      setFeaturedCategories(data);
    })
  },[])

  // console.log(featuredCategories)

  return (
    <SafeAreaView className="bg-white pt-5">

        {/* topnav */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
               Deliver Now!
            </Text>
            <Text className='font-bold text-xl'>
              Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
            </Text> 
          </View>

          <UserIcon size={35} color='#00CCBB'/>
        </View>
          
          {/* searchbar */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 pt-0'>
          <View className='flex-row space-x-2 bg-gray-200 pt-3 flex-1'>
            <MagnifyingGlassIcon color='gray' size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' className='pb-3'/>
          </View>
          <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
        
        {/* body */}
        <ScrollView >
            {/* categories */}
            <Categories/>

            {/* featured */}
            {featuredCategories?.map(category => (
              <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />

            ))}
        </ScrollView>
    </SafeAreaView>
  )
}

