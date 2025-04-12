import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(inputText) {
		setGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: inputText, id: Math.random().toString() },
		]);
	}

	function deleteGoalHandler(id) {
		setGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((item) => item.id !== id);
		});
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onPressHandler={addGoalHandler} />
			<View style={styles.goalsContainer}>
				{/* <ScrollView alwaysBounceVertical={false}>
					{goals.length >= 1 &&
						goals.map((goal, goalIndex) => (
							<View style={styles.goalItem}>
								<Text key={goalIndex} style={styles.goalText}>
									{goal}
								</Text>
							</View>
						))}
					{goals.length == 0 && <Text>List of goals...</Text>}
				</ScrollView> */}
				<FlatList
					data={goals}
					renderItem={(itemData) => (
						<GoalItem
							text={itemData.item.text}
							id={itemData.item.id}
							onDeleteGoalItem={deleteGoalHandler}
						/>
					)}
					keyExtractor={(item, index) => item.id}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 7,
	},
});
