import { View, Text } from "react-native";

import ViewButton from "../atoms/viewButton/ViewButton";
import styles from "./styles";

const TinyImage = ({title, date})=> {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date} >{date}</Text>
            <ViewButton />
        </View>
    )
};

export default TinyImage;