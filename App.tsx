import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListingEdit from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
	return (
		<GestureHandlerRootView>
			<ListingEdit />
		</GestureHandlerRootView>
	);
}
