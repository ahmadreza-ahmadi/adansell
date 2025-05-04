import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../configs/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen() {
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			resizeMode='cover'
			blurRadius={8}
			style={styles.background}
		>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<AppText style={styles.tagline}>Sell What You Don't Need</AppText>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title='login' />
				<AppButton title='register' color='secondary' />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	logoContainer: { marginTop: 96, alignItems: 'center' },
	logo: {
		width: 100,
		height: 100,
		marginBottom: 16,
	},
	tagline: { fontWeight: 'bold', fontSize: 22 },
	buttonsContainer: { width: '100%', padding: 16, gap: 16 },
});

export default WelcomeScreen;
