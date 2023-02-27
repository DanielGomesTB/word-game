import * as React from 'react';
import { View, Button } from 'react-native';
import chooseCategory from '../categories/index';

export default function Categories({ navigation }) {
  const playCategory = (category) => {
    const response = chooseCategory(category)
    console.log(response)
    navigation.navigate('Game')
  }
  return (
    <View>
      <Button 
        title='Filmes'
        onPress={() => playCategory('movies')}
      />
      <Button 
        title='Músicas'
        onPress={() => playCategory('musics')}
      />
      <Button 
        title='Jogos'
        onPress={() => playCategory('games')}
      />
    </View>
  );
}
