import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ButtonProps } from 'react-native';
import colors from '../configs/colors';

type Props = {
	title: string;
	color?: keyof typeof colors;
	onPress?: ButtonProps['onPress'];
};

function AppButton({ title, color = 'primary', onPress }: Props) {
	return (
		<TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 9999,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});

export default AppButton;
