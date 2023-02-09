import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import CategoriesCard from './CategoriesCard';


export default function Categories() {

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15, 
        paddingTop: 10, 
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* categories card */}
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
      <CategoriesCard 
      imgUrl='https://links.papareact.com/gn7' 
      title='Testing'/>
    </ScrollView>
  )
}