import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

import CoffeeImg from "@/assets/images/coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>coffee Shop</Text>
      <Link href="/explore">Explore</Link>
      <ImageBackground 
      source = {CoffeeImg}
      resizeMode= 'cover'
      style = {styles.image}
      > </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  link:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4

  }
})