import { StyleSheet } from 'react-native';

export const colors = {
	mainBgc: '#E65C5C',
	mainTitle: '#FFFFFF',
	cardBgc: '#FAEEEE',
	cardTitle: '#999999', //75% opacity
	cardSub: '#EFA4A4',
	cardText: '#999999', //75% opacity
	cardHigh: '#BFBFBF', //50% opacity
	statusBar: '#8C3838'
}

export const mainS = StyleSheet.create({
	container: {
		backgroundColor: colors.mainBgc,
		flex: 1,
		flexDirection: 'column',
		padding: 20
	},
	header: {
		elevation: 1
		//flex: 1
	},
	body: {
		flex: 4,
		elevation: 4
	},
	title: {
		color: colors.mainTitle,
		fontSize: 50,
	},
});

export const cardS = StyleSheet.create({
	card: {
		backgroundColor: colors.cardBgc,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginBottom: 20,
	},
	cat: {
		fontSize: 12,
		color: colors.cardText,
		opacity: .75,
		marginBottom: 5,
	},
	title: {
		color: colors.cardTitle,
		fontSize: 40,
		//fontWeight: 700,
	},
	sub: {
		color: colors.cardSub,
		fontSize: 30,
		//fontWeight: 100,
		fontStyle: "italic",
	},
	text: {
		color: colors.cardText,
		fontSize: 15,
		lineHeight: 20,
	},
	player: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: 30,
		marginTop: 5
	},
	desc: {
		display: 'none',
	}
});