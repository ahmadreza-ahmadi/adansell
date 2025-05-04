import { View, StyleSheet, TextInputProps, TouchableWithoutFeedback } from 'react-native';
import { useFormikContext } from 'formik';

import colors from '../../configs/colors';
import AppTextInput from '../AppTextInput';
import { ErrorMessage } from '../../components/forms';
import type { Props as AppPickerProps } from '../../components/AppPicker';
import AppPicker from '../../components/AppPicker';

type Props<Values> = {
	name: keyof Values;
} & AppPickerProps;

function AppFormPicker<Values extends { [key: string]: any }>({
	name,
	...restProps
}: Props<Values>) {
	const { values, setFieldValue, touched, errors, setFieldTouched } = useFormikContext<Values>();

	return (
		<TouchableWithoutFeedback onPress={() => setFieldTouched(name.toString())}>
			<View style={styles.container}>
				<AppPicker
					{...restProps}
					selectedOption={values[name]}
					onSelectOption={option => setFieldValue(name.toString(), option)}
				/>
				<ErrorMessage error={errors[name] as string} visible={!!touched[name]} />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 4,
	},
});

export default AppFormPicker;
