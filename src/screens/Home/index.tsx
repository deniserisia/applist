import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View, TextInput, Image } from 'react-native';
import { styles } from './style';

export  function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Help-Me Doctor</Text>
      <Image source={require('./assets/doctor.png')} style={styles.logoImage} />
      <TextInput style={styles.input} placeholder="Login" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry />
      <StatusBar style="light" />
    </View>
  );
}