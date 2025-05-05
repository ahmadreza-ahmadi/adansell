import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import { Option, OptionWithIcon } from '../components/AppPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().required().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
});

const CATEGORIES: OptionWithIcon[] = [
	{
		value: 1,
		label: 'Furniture',
		icon: {
			name: 'floor-lamp',
			color: '#fc5c65',
		},
	},
	{
		value: 2,
		label: 'Cars',
		icon: {
			name: 'car',
			color: '#fd9644',
		},
	},
	{
		value: 3,
		label: 'Cameras',
		icon: {
			name: 'camera',
			color: '#fed330',
		},
	},
	{
		value: 4,
		label: 'Games',
		icon: {
			name: 'cards',
			color: '#26de81',
		},
	},
	{
		value: 5,
		label: 'Clothing',
		icon: {
			name: 'shoe-heel',
			color: '#2bcbba',
		},
	},
	{
		value: 6,
		label: 'Sports',
		icon: {
			name: 'basketball',
			color: '#45aaf2',
		},
	},
	{
		value: 7,
		label: 'Movies & Music',
		icon: {
			name: 'headphones',
			color: '#4b7bec',
		},
	},
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
						placeholder='Title'
						autoCapitalize='words'
						maxLength={255}
					/>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='price'
						placeholder='Price'
						keyboardType='numeric'
						maxLength={8}
						style={{ width: 128 }}
					/>
					<AppFormPicker<Yup.InferType<typeof validationSchema>>
						name='category'
						options={CATEGORIES}
						placeholder='Category'
						style={{ width: 200 }}
						variant='category'
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
