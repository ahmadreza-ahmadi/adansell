import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import colors from '../../configs/colors';

type Props = {
	error?: string;
	visible?: boolean;
};

function ErrorMessage({ error, visible }: Props) {
	if (!error || !visible) return;

	return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
	error: { color: colors.danger, marginLeft: 16 },
});

export default ErrorMessage;
