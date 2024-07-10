import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  logoImage: {
    width: 100, 
    height: 100, 
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
});
