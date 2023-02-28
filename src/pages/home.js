import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View>
      <Text>Home</Text>
      <Button 
        title='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
      <Button 
        title='Play'
        onPress={() => navigation.navigate('Categories')}
      />
    </View>
  );
}
