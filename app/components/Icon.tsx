import { MaterialCommunityIcons } from '@expo/vector-icons';
import { type Icon, IconProps } from '@expo/vector-icons/build/createIconSet';
import { View, StyleSheet, ColorValue } from 'react-native';
import colors from '../configs/colors';

type ExtractInnerType<I> = I extends Icon<infer T, 'material-community'> ? T : never;

export type Props = {
	name: ExtractInnerType<typeof MaterialCommunityIcons>;
	size?: IconProps<ExtractInnerType<typeof MaterialCommunityIcons>>['size'];
	backgroundColor?: ColorValue;
	iconColor?: ColorValue;
};

function Icon({
	name,
	size = 40,
	backgroundColor = colors.black,
	iconColor = colors.white,
}: Props) {
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor, height: size, width: size, borderRadius: size / 2 },
			]}
		>
			<MaterialCommunityIcons size={size / 2} name={name} color={iconColor} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Icon;
