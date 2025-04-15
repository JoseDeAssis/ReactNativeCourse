import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteGoalItem }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210646" }}
				onPress={onDeleteGoalItem.bind(this, id)}
				style={({pressed}) => pressed && styles.pressedItem}
			>
				<View>
					<Text style={styles.goalText}>{text}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},	
	goalText: {
		color: "white",
		padding: 8,
	},
});

export default GoalItem;
