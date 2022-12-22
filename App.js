import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    };

    const addGoalHandler = (enteredText) => {
        if (!enteredText.trim()) return;

        const newGoal = {
            id: Math.random() * 100,
            text: enteredText,
        };

        setCourseGoals((prev) => [...prev, newGoal]);
        endAddGoalHandler();
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        alwaysBounceVertical={false}
                        renderItem={(itemData) => (
                            <GoalItem
                                onDeleteGoal={deleteGoalHandler}
                                id={itemData.item.id}
                                text={itemData.item.text}
                            />
                        )}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    goalsContainer: {
        flex: 5,
    },
});
