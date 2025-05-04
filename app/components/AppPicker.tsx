import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons/build/createIconSet';

import colors from '../configs/colors';
import AppText from './AppText';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListItemSeparator from './ListItemSeparator';
import PickerItem from './PickerItem';

type ExtractInnerType<I> = I extends Icon<infer T, 'material-community'> ? T : never;

export type Option = {
	value: number;
	label: string;
};

export type Props = {
	icon?: ExtractInnerType<typeof MaterialCommunityIcons>;
	placeholder: string;
	options: Option[];
	onSelectOption?: (option: Option) => void;
	selectedOption?: Option;
	style?: StyleProp<ViewStyle>;
};

function AppPicker({ icon, placeholder, options, onSelectOption, selectedOption, style }: Props) {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const handleChangeOption = (option: Option) => {
		onSelectOption && onSelectOption(option);
		setModalIsVisible(false);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalIsVisible(true)}>
				<View style={[styles.container, style]}>
					{icon && <MaterialCommunityIcons name={icon} size={24} color={colors.medium} />}
					{selectedOption ? (
						<AppText style={styles.text}>{selectedOption.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons name='chevron-down' size={24} color={colors.medium} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalIsVisible} animationType='slide'>
				<Button title='Close' onPress={() => setModalIsVisible(false)} />
				<FlatList
					style={{}}
					data={options}
					keyExtractor={option => option.value.toString()}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<PickerItem label={item.label} onPress={() => handleChangeOption(item)} />
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 32,
		flexDirection: 'row',
		width: '100%',
		padding: 16,
		alignItems: 'center',
		gap: 8,
	},
	text: {
		flex: 1,
	},
	placeholder: { color: colors.medium, flex: 1 },
});

export default AppPicker;
