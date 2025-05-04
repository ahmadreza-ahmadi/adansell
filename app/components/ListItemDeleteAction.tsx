import {
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableWithoutFeedbackProps,
	View,
} from 'react-native';
import colors from '../configs/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
	onPress: TouchableWithoutFeedbackProps['onPress'];
};

function ListItemDeleteAction({ onPress }: Props) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name='trash-can' size={32} color={colors.white} />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		justifyContent: 'center',
		alignItems: 'center',
		width: 64,
	},
});

export default ListItemDeleteAction;
