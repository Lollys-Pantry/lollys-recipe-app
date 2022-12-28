import { Text, View, Button, FlatList } from 'react-native';

export default function Recipe({ route, navigation }) {
  const { recipe } = route.params;
  return(
    <View>
      <Text>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
      <Text>{recipe.servings}</Text>
      <Text>{recipe.prep_time}</Text>
      <Text>{recipe.cook_time}</Text>
      <Text>{recipe.sprouty_pie}</Text>
      <Text>{recipe.lollys_pantry}</Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.quantity} {item.measurement} {item.name}</Text>
        )}
      />
      
      <Button title="Go to Home" onPress={() => navigation.navigate("Lolly's Recipes")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}