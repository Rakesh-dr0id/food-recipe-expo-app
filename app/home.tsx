import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import categories from '../assets/data/categories.json';

interface Recipe {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <View style={tw`flex-1 p-5`}>
    <Image
      style={tw`h-28 w-42 rounded-lg`}
      source={{ uri: recipe.strCategoryThumb }}
    />
    <Text style={tw`text-center font-semibold text-gray-500 mt-1`}>
      {recipe.strCategory}
    </Text>
  </View>
);

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setLoading(true);
    // Simulate data fetching
    setTimeout(() => {
      setRecipes(categories);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`flex-1`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center p-6`}>
          <Ionicons name="person-circle" size={34} color="orange" />
          <Feather name="bell" size={34} color="orange" />
        </View>

        {/* Welcome Text */}
        <View style={tw`p-6 pt-0`}>
          <Text style={tw`font-semibold text-lg`}>Hello, Spaqoo</Text>
          <Text style={tw`font-bold text-4xl`}>
            Make your own food, stay at{' '}
            <Text style={tw`text-orange-500`}>home</Text>
          </Text>
        </View>

        {/* Search Input */}
        <View
          style={tw`bg-gray-200 p-1 rounded-full mx-5 flex-row justify-start items-center gap-2`}
        >
          <TextInput
            style={tw`flex-1 text-lg font-semibold text-gray-500 p-3 rounded-l-full`}
            placeholder="Search any recipe"
          />
          <Feather
            style={tw`p-2 bg-white rounded-full`}
            name="search"
            size={24}
            color="black"
          />
        </View>

        {/* Categories */}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`gap-5 p-5`}
            data={categories}
            keyExtractor={(item) => item.idCategory}
            renderItem={({ item }) => (
              <View style={tw`flex items-center`}>
                <Image
                  source={{ uri: item.strCategoryThumb }}
                  style={tw`h-12 w-15`}
                  resizeMode="cover"
                />
                <Text style={tw`font-semibold text-gray-500 mt-1`}>
                  {item.strCategory}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Recipes */}
        <View>
          <Text style={tw`px-5 text-3xl font-semibold`}>Recipes</Text>
          {loading ? (
            <ActivityIndicator style={tw`mt-5`} size="large" color="orange" />
          ) : recipes.length > 0 ? (
            <FlatList
              data={categories}
              keyExtractor={(item) => item.idCategory}
              numColumns={2}
              renderItem={({ item }) => <RecipeCard recipe={item} />}
            />
          ) : (
            <Text style={tw`text-center text-gray-500 mt-5`}>
              No recipes found
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
