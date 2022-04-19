import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const Icon = ({ type }: { type: any }) => {
	return (
		// @ts-ignore
		<SimpleLineIcons
			name={type}
			size={26}
			color='#a5a6aa'
			style={styles.icon}
		/>
	);
};

export default Icon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 15,
		height: 26
	}
});
