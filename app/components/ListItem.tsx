import React from 'react';
import {
	View,
	Image,
	ImageSourcePropType,
	StyleSheet,
	StyleProp,
	ViewStyle,
	TouchableHighlight,
	GestureResponderEvent,
} from 'react-native';
import { SwipeableProps, Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../configs/colors';

type Props = {
	title: string;
	subTitle?: string;
	onPress?: (event: GestureResponderEvent) => void;
	renderRightActions?: SwipeableProps['renderRightActions'];
	style?: StyleProp<ViewStyle>;
	showChevrons?: boolean;
} & (
	| {
			variant: 'image';
			image: ImageSourcePropType;
	  }
	| { variant: 'custom'; IconComponent: React.ElementType }
);

function ListItem(props: Props) {
	const { title, subTitle, onPress, style, renderRightActions, showChevrons = false } = props;

	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					{'image' in props ? (
						<Image source={props.image} style={styles.image} />
					) : (
						<props.IconComponent />
					)}

					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</AppText>
						)}
					</View>

					{showChevrons && (
						<MaterialCommunityIcons name='chevron-right' size={28} color={colors.medium} />
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 12,
		padding: 16,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	image: { width: 64, height: 64, borderRadius: 9999 },
	detailsContainer: { justifyContent: 'center', flex: 1 },
	title: { fontWeight: '500' },
	subTitle: { color: colors.medium, fontSize: 16 },
});

export default ListItem;
