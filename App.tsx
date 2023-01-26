import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationProp,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Print from './src/screens/Print';
type RootStackParamList = {
  Home: undefined;
  Print: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Print" component={Print} />
    </Stack.Navigator>
  );
}

type HomeScreenNavigationProp = StackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: HomeScreenNavigationProp) {
  return (
    <View>
      <Text>Hello HOME</Text>
      <Button title="Print" onPress={() => navigation.navigate('Print')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
