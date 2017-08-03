import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{props.albumRecord.title}</Text>
		</View>
	);
}

export default AlbumDetail;