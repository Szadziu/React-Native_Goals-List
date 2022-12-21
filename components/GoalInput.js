import { StyleSheet, TextInput } from 'react-native';

const GoalInput = ({ value, onChange }) => {
    return (
        <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            value={value}
            onChangeText={onChange}
        />
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
