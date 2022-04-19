import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";

const Item = ({ style, children }: { style?: ViewStyle; children: any }) => {
	return <View style={[styles.container, style]}>{children}</View>;
};

export default Item;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		overflow: "hidden",
		backgroundColor: "transparent"
	}
});
