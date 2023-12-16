import { Button, Image, Text, View } from "react-native";

import styles from "./styles";
import ViewButton from "../atoms/viewButton";

const ImageOfTheDay = ({title, date, url})=> {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:url}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <ViewButton />
        </View>
    )
};

export default ImageOfTheDay;