import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../utils/colors';
import Greeting from '../components/Header/Greeting';
// import Profile from '../components/Header/Profile';
// import Avatar from '../assets/avi/avatar.png';
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: colors.secondary,
          // headerRight: () => (
          //   <Profile img={Avatar} imgContainerStyles={{backgroundColor: colors.tertiary}} />
          // ),
        }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => null,
            headerTitle: props => (
              <Greeting mainText="Hey Shantanu!" subText="Welcome back" {...props} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
