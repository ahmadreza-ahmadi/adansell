import React from 'react';
import { Image, View, StyleSheet, Platform, StatusBar } from 'react-native';
import colors from '../configs/colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function ViewImageScreen() {
	return (
		<View style={styles.background}>
			<Image source={require('../assets/chair.jpg')} resizeMode='contain' style={styles.image} />
			<View style={styles.buttonsContainer}>
				<View style={styles.button}>
					<MaterialCommunityIcons name='close' size={32} color={colors.white} />
				</View>
				<View style={styles.button}>
					<MaterialCommunityIcons name='trash-can-outline' size={32} color={colors.white} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: colors.black,
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	buttonsContainer: {
		justifyContent: 'space-between',
		position: 'absolute',
		top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		paddingInline: 32,
		width: '100%',
		flexDirection: 'row',
	},
	button: {
		padding: 8,
	},
});

export default ViewImageScreen;
