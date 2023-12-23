import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ViewButton from "../atoms/viewButton";
import TextLine from "../atoms/textLine/TextLine";

const ImageOfTheDay = ({title, date, url, explanation})=> {
    const {navigate} = useNavigation();

    const handleViewOnPress = ()=> {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:url}} />
            <TextLine textStyle={styles.title} text={title} />
            <TextLine textStyle={styles.date} text={date} />
            <ViewButton handleOnPress={handleViewOnPress} />
        </View>
    )
};

export default ImageOfTheDay;