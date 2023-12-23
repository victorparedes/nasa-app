import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',
    },
    content: {
        flex: 1,
        backgroundColor: '#2c499d',
        borderRadius: 32,
        marginVertical: 25,
        padding: 15,
    },
    image: {
        width: '100%',
        height: '50%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 30,
        marginBottom: 15,
    },
    date: {
        marginBottom: 15,
    },
});