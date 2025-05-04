import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons/build/createIconSet';

import colors from '../configs/colors';
import defaultStyles from '../configs/defaultStyles';

type ExtractInnerType<I> = I extends Icon<infer T, 'material-community'> ? T : never;

export type Props = {
	icon?: ExtractInnerType<typeof MaterialCommunityIcons>;
	style?: TextInputProps['style'];
} & TextInputProps;

function AppTextInput({ icon, style, ...restProps }: Props) {
	return (
		<View style={[styles.container, style]}>
			{icon && <MaterialCommunityIcons name={icon} size={24} color={colors.medium} />}
			<TextInput placeholderTextColor={colors.medium} style={styles.textInput} {...restProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 32,
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: 16,
		alignItems: 'center',
		gap: 8,
	},
	textInput: {
		...defaultStyles.text,
		flex: 1,
		paddingVertical: 16,
	},
});

export default AppTextInput;
