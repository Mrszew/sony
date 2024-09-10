import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
    headerShown:false
    },[])
  })
  return (
    <SafeAreaView>
      <View>
        <Text className='text-red-500'>hello</Text>
        <Image source={{uri:"https://cdn.aniagotuje.com/pictures/articles/2023/02/38768540-v-1080x1080.jpg"}} resizeMode='contain'/>
      </View>
      </SafeAreaView>
  );
}

// const style = StyleSheet.create({
//   image:{
//     padding: 5,
//     aspectRatio:1,
//     maxWidth:100
//   }
// })