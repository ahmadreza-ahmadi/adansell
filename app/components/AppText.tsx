import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

import defaultStyles from '../configs/defaultStyles';

type Props = {
	children?: ReactNode;
	style?: TextProps['style'];
} & TextProps;

function AppText({ children, style, ...restProps }: Props) {
	return (
		<Text style={[defaultStyles.text, style]} {...restProps}>
			{children}
		</Text>
	);
}

export default AppText;
