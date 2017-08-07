import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({albumRecord}) => {

	const { thumbnail_image, title, artist, image } = albumRecord;
	const { textContainerStyle, thumbnailStyle, thumbnailContainerStyle, textStyle, imageStyle } = styles;

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
			
			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button />
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
		//alignitems is when a container tells its children to position all those items in some fashion
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null,
	}
};

export default AlbumDetail;
