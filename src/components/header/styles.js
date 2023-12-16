import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',        
    },
    containerLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    containerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        color: '#fff',
    },
    image: {
        width: 60,
        height: 60,
    },
});