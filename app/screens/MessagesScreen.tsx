import { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/mosh.jpg'),
	},
];

function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [isRefreshing, setIsRefreshing] = useState(false);

	function handleDelete(id: number) {
		setMessages(messages.filter(message => message.id !== id));
	}

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						variant='image'
						image={item.image}
						key={item.id}
						showChevrons
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item.id)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={isRefreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 3,
							title: 'T3',
							description: 'D3',
							image: require('../assets/mosh.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}

export default MessagesScreen;
