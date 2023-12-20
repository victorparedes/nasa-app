import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ViewButton from "../atoms/viewButton/ViewButton";
import styles from "./styles";

const TinyImage = ({title, date, url, explanation})=> {
    const {navigate} = useNavigation();

    const handleViewOnPress = ()=> {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date} >{date}</Text>
            <ViewButton handleOnPress={handleViewOnPress} />
        </View>
    )
};

export default TinyImage;