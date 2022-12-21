import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text }) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText} numberOfLines={2}>
                {text}
            </Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: 'darkblue',
        marginBottom: 12,
        padding: 12,
        borderRadius: 10,
    },
    goalText: {
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});
