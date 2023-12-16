import { View, Text, ScrollView } from "react-native";

import TinyImage from "../tinyImage/tinyImage";
import styles from "./styles";
import Title from "../atoms/title/title";

const TinyListImages = (props)=> {
    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <Title text={'Last five days'}/>
            </View>
            <ScrollView style={styles.content}>
                {props.images.map((item) => <TinyImage key={item.title} {...item}/>)}            
            </ScrollView>
        </View>    
    )
};

export default TinyListImages;