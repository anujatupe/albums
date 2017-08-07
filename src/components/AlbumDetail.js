import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({albumRecord}) => {

	const { thumbnail_image, title, artist } = albumRecord;
	const { textContainerStyle, thumbnailStyle, thumbnailContainerStyle, textStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={textContainerStyle}>
					<Text style={textStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	textContainerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	textStyle: {
		fontSize: 18,
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	}
};

export default AlbumDetail;
