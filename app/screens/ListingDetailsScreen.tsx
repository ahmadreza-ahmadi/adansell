import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../configs/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen() {
	return (
		<View>
			<Image source={require('../assets/jacket.jpg')} style={styles.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>

				<ListItem
					image={require('../assets/mosh.jpg')}
					title='Ahmadreza Ahmadi'
					subTitle='4 Listings'
					style={{ marginTop: 40 }}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: { padding: 16 },
	title: { fontSize: 24, marginBottom: 8 },
	price: { color: colors.secondary, fontWeight: 'bold', fontSize: 20 },
});

export default ListingDetailsScreen;
