import { StyleSheet, Image, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
	return (
		<Screen style={styles.screen}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log(values)}
				validationSchema={validationSchema}
			>
				<View style={styles.inputsContainer}>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='email'
						autoCapitalize='words'
						autoCorrect
						icon='account'
						placeholder='Name'
					></AppFormField>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='email'
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						textContentType='emailAddress'
						placeholder='Email'
						keyboardType='email-address'
					/>
					<AppFormField<Yup.InferType<typeof validationSchema>>
						name='password'
						autoCapitalize='none'
						autoCorrect={false}
						icon='lock'
						textContentType='password'
						placeholder='Password'
						secureTextEntry
					/>
				</View>
				<SubmitButton title='Register' />
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

export default RegisterScreen;
