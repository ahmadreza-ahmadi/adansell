import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListingEdit from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
	return (
		<GestureHandlerRootView>
			<ListingEdit />
		</GestureHandlerRootView>
	);
}
