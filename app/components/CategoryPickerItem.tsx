import { TouchableOpacity, TouchableWithoutFeedbackProps, StyleSheet } from 'react-native';

import AppText from './AppText';
import { OptionWithIcon } from './AppPicker';
import Icon from './Icon';

type Props = {
	item: OptionWithIcon;
	onPress: TouchableWithoutFeedbackProps['onPress'];
};

function CategoryPickerItem({ item, onPress }: Props) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Icon name={item.icon.name} backgroundColor={item.icon.color} size={80} />
			<AppText style={styles.label}>{item.label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		alignItems: 'center',
		gap: 8,
		width: '33%',
	},
	label: { textAlign: 'center' },
});

export default CategoryPickerItem;
