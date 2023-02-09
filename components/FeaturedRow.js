import React from 'react'; 
import { View, Text, ScrollView  } from 'react-native'; 
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from '../components/RestaurantCard.js';


export default function FeaturedRow({id, title, description, featuredCategory}) {

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4' >
          <Text className="font-bold text-lg" >{title}</Text>
          <ArrowRightIcon color='#00CCBB' />
      </View>

      <Text className='text-xs text-gray-500 px-4'> {description} </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15, 
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* rest cards */}

        <RestaurantCard 
            id={1}
            imgUrl="https://links.papareact.com/wru"
            title="Sushi"
            rating={4.5}
            genre="Japanese"
            address={123}
            short_description="amazing"
            dishes={[]}
            long={20}
            lat={10}
            />
             <RestaurantCard 
            id={1}
            imgUrl="https://links.papareact.com/wru"
            title="Sushi"
            rating={4.5}
            genre="Japanese"
            address={123}
            short_description="amazing"
            dishes={[]}
            long={20}
            lat={10}
            />
             <RestaurantCard 
            id={1}
            imgUrl="https://links.papareact.com/wru"
            title="Sushi"
            rating={4.5}
            genre="Japanese"
            address={123}
            short_description="amazing"
            dishes={[]}
            long={20}
            lat={10}
            />

      </ScrollView>
    </View>
  )
}