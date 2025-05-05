import { TouchableOpacity, TouchableWithoutFeedbackProps, StyleSheet } from 'react-native';

import AppText from './AppText';
import { Option } from './AppPicker';

type Props = {
	item: Option;
	onPress: TouchableWithoutFeedbackProps['onPress'];
};

function PickerItem({ item, onPress }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText style={styles.text}>{item.label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: { padding: 8, textAlign: 'center' },
});

export default PickerItem;
