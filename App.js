import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = () => {
        if (!enteredGoalText.trim()) return;

        const newGoal = {
            id: Math.random() * 100,
            text: enteredGoalText,
        };
        setCourseGoals((prev) => [...prev, newGoal]);
        setEnteredGoalText('');
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <GoalInput value={enteredGoalText} onChange={setEnteredGoalText} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    goalsContainer: {
        flex: 5,
    },
});
