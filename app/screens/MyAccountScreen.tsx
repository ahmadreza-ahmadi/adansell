import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';

import colors from '../configs/colors';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import { Props as IconProps } from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

type MenuItem = {
	title: string;
	icon: {
		name: IconProps['name'];
		bgColor: IconProps['backgroundColor'];
	};
};

const menuItems: MenuItem[] = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			bgColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			bgColor: colors.secondary,
		},
	},
];

function MyAccountScreen() {
	return (
		<View style={styles.screen}>
			<Screen>
				<ListItem
					title='Ahmadreza Ahmadi'
					subTitle='ahr.ahmadi.dev@gmail.com'
					style={{ marginVertical: 40 }}
					variant='image'
					image={require('../assets/mosh.jpg')}
				/>
				<FlatList
					data={menuItems}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							variant='custom'
							IconComponent={() => (
								<Icon name={item.icon.name} backgroundColor={item.icon.bgColor} />
							)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
					style={{ marginBottom: 24 }}
				/>
				<ListItem
					title='Log Out'
					variant='custom'
					IconComponent={() => <Icon name='logout' backgroundColor={colors.warning} />}
				/>
			</Screen>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		flex: 1,
	},
});

export default MyAccountScreen;
