import { FlatList, ImageSourcePropType, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import colors from '../configs/colors';
import Card from '../components/Card';

type Listing = {
	id: number;
	image: ImageSourcePropType;
	title: string;
	price: string;
};

const listings: Listing[] = [
	{
		id: 1,
		image: require('../assets/jacket.jpg'),
		title: 'Red jacket for sale',
		price: '$100',
	},
	{
		id: 2,
		image: require('../assets/couch.jpg'),
		title: 'Couch in great conditiion',
		price: '$1000',
	},
];

function ListingsScreen() {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						image={item.image}
						title={item.title}
						subTitle={item.price}
						style={{ marginBottom: 20 }}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.light,
		padding: 20,
		paddingTop: 40,
	},
});

export default ListingsScreen;
