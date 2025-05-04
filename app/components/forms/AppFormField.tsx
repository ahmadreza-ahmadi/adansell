import { View, StyleSheet, TextInputProps } from 'react-native';
import { useFormikContext } from 'formik';

import colors from '../../configs/colors';
import AppTextInput from '../AppTextInput';
import { ErrorMessage } from '../../components/forms';
import type { Props as AppTextInputProps } from '../../components/AppTextInput';

type Props<Values> = {
	name: keyof Values;
} & AppTextInputProps;

function AppFormField<Values extends { [key: string]: any }>({
	name,
	...restProps
}: Props<Values>) {
	const { setFieldTouched, values, handleChange, touched, errors } = useFormikContext<Values>();

	return (
		<View style={styles.container}>
			<AppTextInput
				value={values[name]}
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name.toString())}
				{...restProps}
			/>
			<ErrorMessage error={errors[name] as string} visible={!!touched[name]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 4,
	},
});

export default AppFormField;
