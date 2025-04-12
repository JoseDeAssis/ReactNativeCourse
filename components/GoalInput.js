import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ onPressHandler }) {
	const [inputText, setInputText] = useState("");

	function goalInputHandler(enteredText) {
		setInputText(enteredText);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Your course goal!"
				style={styles.textInput}
				onChangeText={goalInputHandler}
				value={inputText}
			/>
			<Button
				title="Add goal"
				onPress={() => {
					onPressHandler(inputText);
          setInputText("");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		padding: 8,
		marginRight: 8,
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
	},
});

export default GoalInput;
