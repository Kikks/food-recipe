import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SPACING } from "../utils/constants";
import data, { detailsList, iconsByType, Data } from "../data";
import Icon from "./Icon";
import Item from "./Item";

const Details = ({ color, index }: { color: string; index: number }) => {
	return (
		<View style={styles.container}>
			{detailsList.map(key => (
				<View key={key} style={styles.wrapper}>
					<Icon type={iconsByType[key]} />
					<Item style={styles.item}>
						<Text key={`${key}-${index}`} style={[styles.text, { color }]}>
							{data[index][key as keyof Data]}
						</Text>
					</Item>
				</View>
			))}
		</View>
	);
};

export default Details;

const styles = StyleSheet.create({
	container: {
		marginVertical: SPACING
	},
	wrapper: {
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 25
	},
	item: {
		flex: 1,
		height: 26,
		justifyContent: "center"
	},
	text: {
		fontSize: 16,
		fontWeight: "700"
	}
});
