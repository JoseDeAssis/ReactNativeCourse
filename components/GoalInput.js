import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ onPressHandler, isVisible, onCancel }) {
	const [inputText, setInputText] = useState("");

	function goalInputHandler(enteredText) {
		setInputText(enteredText);
	}

	return (
		<Modal visible={isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={require('../assets/images/goal.png')} style={styles.image} />
				<TextInput
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={inputText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Add goal"
							onPress={() => {
								onPressHandler(inputText);
								setInputText("");
							}}
							color="#b180f0"
						/>
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onCancel} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b"
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	},	
	textInput: {
		padding: 8,
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 16
	},
	button: {
		width: "25%",
		marginHorizontal: 8
	}
});

export default GoalInput;
