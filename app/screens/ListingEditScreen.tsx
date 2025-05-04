import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().required().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
});

const CATEGORIES = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Camera', value: 3 },
];

function ListingEdit() {
	return (
		<Screen style={styles.screen}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<AppForm
				initialValues={{ title: '', price: '', description: '', category: null }}
				onSubmit={values => console.log(values)}
				validationSchema={validationSchema}
			>
				<View style={styles.inputsContainer}>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='title'
						placeholder='Email'
						autoCapitalize='words'
						maxLength={255}
					/>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='price'
						placeholder='Price'
						keyboardType='numeric'
						maxLength={8}
					/>
					<AppFormPicker<Yup.InferType<typeof validationSchema>>
						name='category'
						options={CATEGORIES}
						placeholder='Category'
					/>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='description'
						placeholder='Description'
						autoCapitalize='sentences'
						maxLength={255}
						multiline
						numberOfLines={3}
					/>
				</View>
				<SubmitButton title='Post' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center',
		flex: 1,
		padding: 16,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 48,
		marginBottom: 24,
	},
	inputsContainer: {
		gap: 12,
		marginBottom: 24,
	},
});

export default ListingEdit;
