import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ViewButton from "../atoms/viewButton/ViewButton";
import TextLine from "../atoms/textLine/TextLine";
import styles from "./styles";

const TinyImage = ({title, date, url, explanation})=> {
    const {navigate} = useNavigation();

    const handleViewOnPress = ()=> {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <TextLine textStyle={styles.title} text={title}/>
            <TextLine text={date}/>
            <ViewButton handleOnPress={handleViewOnPress} />
        </View>
    )
};

export default TinyImage;