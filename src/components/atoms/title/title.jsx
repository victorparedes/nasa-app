import { Text, StyleSheet } from "react-native";

const Title = ({text})=> {
    return (
        <Text style={styles.title}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
    }
});

export default Title;