import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "./Item";

const Description = ({
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
			<Text key={`description-${index}`} style={[styles.text, { color }]}>
				{text}
			</Text>
		</Item>
	);
};

export default Description;

const styles = StyleSheet.create({
	text: {
		fontSize: 16
	}
});
