import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import tw, { style } from 'twrnc';
import { router } from 'expo-router';

const index = () => {
  return (
    <Pressable
      onPress={() => router.push('/home')}
      style={tw`flex-1 justify-center items-center bg-orange-500`}
    >
      <Image source={require('../assets/food.webp')} style={tw`w-70 h-70`} />

      <Text style={tw`text-5xl font-bold text-white`}>Foody</Text>
      <Text style={tw`text-lg text-white font-semibold mt-2`}>
        Food is always right
      </Text>
    </Pressable>
  );
};

export default index;
