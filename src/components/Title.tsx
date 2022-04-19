import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "./Item";
import { TITLE_SIZE } from "../utils/constants";

const Title = ({
	text,
	color,
	index
}: {
	text: string;
	color: string;
	index: number;
}) => {
	return (
		<Item>
			<Text
				key={`description-${index}`}
				style={[styles.text, { color }]}
				numberOfLines={2}
			>
				{text}
			</Text>
		</Item>
	);
};

export default Title;

const styles = StyleSheet.create({
	item: {
		height: TITLE_SIZE * 3,
		justifyContent: "flex-end"
	},
	text: {
		fontSize: TITLE_SIZE,
		fontWeight: "900"
	}
});
