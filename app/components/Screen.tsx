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
		padding: 16,
		flex: 1,
	},
});

export default Screen;
