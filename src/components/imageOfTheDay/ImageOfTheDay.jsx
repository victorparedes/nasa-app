import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ViewButton from "../atoms/viewButton";

const ImageOfTheDay = ({title, date, url, explanation})=> {
    const {navigate} = useNavigation();

    const handleViewOnPress = ()=> {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:url}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <ViewButton handleOnPress={handleViewOnPress} />
        </View>
    )
};

export default ImageOfTheDay;