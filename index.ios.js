//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
	//In the course, instructor asks to add flex: 1 style for the view tag because it enables scrolling 
	//But this version of react native, supports scrolling without that style.
    <View>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
