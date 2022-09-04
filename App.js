import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipes</Text>
      <Image
        style={styles.logo}
        source={require('./assets/LP_Retro_Logo.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  header: {
    textAlign:'center',
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logo: {
    width: 200,
    height: 200,
  }
});
