import { View, ScrollView, Image } from "react-native"
import { useRoute } from "@react-navigation/native";

import styles from "./styles";
import TextLine from "../../components/atoms/textLine";
import Title from "../../components/atoms/title";
import Header from "../../components/header";

const Detail = ()=> {
    const {params: {title, date, url, explanation}} = useRoute();
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content} >
                <Image style={styles.image} source={{ uri: url}}/>
                <Title text={title} />
                <TextLine textStyle={styles.date} text={date} />
                <ScrollView>
                    <TextLine text={explanation} />
                </ScrollView>
            </View>
        </View>
    )
};

export default Detail;