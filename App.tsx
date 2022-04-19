import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Animated,
	Dimensions,
	Easing,
	Image,
	SafeAreaView,
	StyleSheet
} from "react-native";
import {
	Transition,
	Transitioning,
	TransitioningView
} from "react-native-reanimated";
import {
	Directions,
	FlingGestureHandler,
	State
} from "react-native-gesture-handler";
import posed, { Transition as PoseTransition } from "react-native-pose";
import colors from "./src/utils/colors";
import data from "./src/data";
import Title from "./src/components/Title";
import Details from "./src/components/Details";
import Description from "./src/components/Description";
import { DURATION, IMAGE_SIZE } from "./src/utils/constants";

const { height, width } = Dimensions.get("screen");

const transition = (
	<Transition.Together>
		<Transition.Out
			type='slide-bottom'
			durationMs={DURATION}
			interpolation='easeIn'
		/>
		<Transition.Change />
		<Transition.In
			type='slide-bottom'
			durationMs={DURATION}
			interpolation='easeOut'
		/>
	</Transition.Together>
);

const config = {
	transition: {
		type: "tween",
		duration: DURATION,
		easing: Easing.elastic(0.9)
	}
};

const PosedView = posed.View({
	enter: { opacity: 1, rotate: "0deg", ...config },
	exit: { opacity: 0, rotate: "180deg", ...config }
});

export default function App() {
	const [index, setIndex] = React.useState(0);
	const color = index % 2 === 1 ? colors.lightText : colors.darkText;
	const headingColor = index % 2 === 1 ? colors.lightText : colors.darkBg;
	const activeIndex = React.useRef(new Animated.Value(0)).current;
	const animation = React.useRef(new Animated.Value(0)).current;
	const ref = React.useRef<React.LegacyRef<TransitioningView> | undefined>();

	React.useEffect(() => {
		Animated.timing(animation, {
			toValue: activeIndex,
			duration: DURATION * 0.6,
			useNativeDriver: true
		}).start();
	}, []);

	const setActiveIndex = React.useCallback((value: number) => {
		setIndex(value);
		ref?.current?.animateNextTransition();
		activeIndex.setValue(value);
	}, []);

	const translateY = animation.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: [height, 0, -height]
	});

	return (
		<FlingGestureHandler
			key='up'
			direction={Directions.UP}
			onHandlerStateChange={event => {
				if (event.nativeEvent.state === State.END) {
					if (index === data.length - 1) {
						return;
					} else {
						setActiveIndex(index + 1);
					}
				}
			}}
		>
			<FlingGestureHandler
				key='down'
				direction={Directions.DOWN}
				onHandlerStateChange={event => {
					if (event.nativeEvent.state === State.END) {
						if (index === 0) {
							return;
						} else {
							setActiveIndex(index - 1);
						}
					}
				}}
			>
				<SafeAreaView style={styles.container}>
					<Animated.View
						style={[
							StyleSheet.absoluteFillObject,
							{ height: height * data.length, transform: [{ translateY }] }
						]}
					>
						{data.map((_, i) => (
							<Animated.View
								key={i}
								style={{
									height,
									backgroundColor: i % 2 === 0 ? colors.lightBg : colors.darkBg
								}}
							/>
						))}
					</Animated.View>
					<PoseTransition>
						{index % 2 === 0 ? (
							<PosedView
								key='image0'
								style={[
									styles.imageContainer,
									{
										borderColor:
											index % 2 === 1 ? colors.lightBg : colors.darkBg
									}
								]}
							>
								<Image
									source={{ uri: data[index].image }}
									style={styles.image}
								/>
							</PosedView>
						) : (
							<PosedView
								key='image1'
								style={[
									styles.imageContainer,
									{
										borderColor:
											index % 2 === 1 ? colors.lightBg : colors.darkBg
									}
								]}
							>
								<Image
									source={{ uri: data[index].image }}
									style={styles.image}
								/>
							</PosedView>
						)}
					</PoseTransition>

					<Transitioning.View
						ref={ref}
						transition={transition}
						style={styles.main}
					>
						<Title
							color={headingColor}
							index={index}
							text={data[index].title}
						/>
						<Details color={color} index={index} />
						<Description
							color={headingColor}
							index={index}
							text={data[index].description}
						/>
					</Transitioning.View>

					<StatusBar
						animated={true}
						style={index % 2 === 0 ? "dark" : "light"}
					/>
				</SafeAreaView>
			</FlingGestureHandler>
		</FlingGestureHandler>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative"
	},
	imageContainer: {
		position: "absolute",
		top: "35%",
		right: "-30%",
		height: IMAGE_SIZE,
		width: IMAGE_SIZE,
		borderRadius: IMAGE_SIZE / 2,
		padding: 20,
		overflow: "hidden",
		borderStyle: "solid",
		borderWidth: 5
	},
	image: {
		...StyleSheet.absoluteFillObject
	},
	main: {
		flex: 1,
		padding: 20,
		justifyContent: "space-evenly"
	}
});
