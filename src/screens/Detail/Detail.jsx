import { View, Text, Image } from "react-native"
import { useRoute } from "@react-navigation/native";

const Detail = ()=> {
    const {params: {title, date, url, explanation}} = useRoute();
    return (
        <View>
            <Image source={{ uri: url}}/>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{explanation}</Text>
        </View>
    )
};

export default Detail;