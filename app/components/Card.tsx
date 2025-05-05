import { View, Image, ImageSourcePropType, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import colors from '../configs/colors';
import AppText from './AppText';

type Props = {
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
	style?: StyleProp<ViewStyle>;
};

function Card({ title, subTitle, image, style }: Props) {
	return (
		<View style={[styles.card, style]}>
			<Image source={image} style={styles.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title} numberOfLines={2}>
					{title}
				</AppText>
				<AppText style={styles.subtitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: colors.white,
		borderRadius: 16,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	detailsContainer: { padding: 16 },
	title: {
		marginBottom: 8,
	},
	subtitle: {
		color: colors.secondary,
		fontWeight: 'bold',
	},
});

export default Card;
