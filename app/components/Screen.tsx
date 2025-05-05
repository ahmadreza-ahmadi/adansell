import { ReactNode } from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
};

function Screen({ style, children }: Props) {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
	},
});

export default Screen;
