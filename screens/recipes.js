import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, FlatList, Text, View, Image, Button } from 'react-native';
import { REACT_APP_BASE_URL } from '@env';
import { NavigationContainer } from '@react-navigation/native';

export default function Recipes({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/LP_Retro_Logo.jpg')}
      />
      <StatusBar style="auto" />
      {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
        <>
          <Text style={styles.header}>Recipes</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Button
              title={item.name}
                onPress={() => navigation.navigate('Recipe Details', { recipe: item })}
              />
            )}
          />
        </>
      )}
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign:'center',
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom:16,
  },
  logo: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize:16,
  }
});
