// src/navigation/mainNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import ChoseUserType from '../screens/ChoseUserType';
import Login from '../screens/login/Login';
import TutorHome from '../screens/tutor/TutorHome';
import AddCourse from '../screens/tutor/courses/AddCourse';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChoseUserType"
          component={ChoseUserType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TutorHome"
          component={TutorHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCourse"
          component={AddCourse}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
