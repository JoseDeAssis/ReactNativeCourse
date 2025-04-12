import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteGoalItem }) {
	return (
		<Pressable style={styles.goalItem} onPress={onDeleteGoalItem.bind(this, id)}>
			<View>
				<Text style={styles.goalText}>{text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
});

export default GoalItem;
