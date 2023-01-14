import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Balance from '../screens/Balance';
import {colors} from '../utils/colors';
import Greeting from '../components/Header/Greeting';
import {CardProps} from '../components/Cards/types';
// import Profile from '../components/Header/Profile';
// import Avatar from '../assets/avi/avatar.png';
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Balance"
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
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerLeftContainerStyle: {paddingLeft: 0},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
