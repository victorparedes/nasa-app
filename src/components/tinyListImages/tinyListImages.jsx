import { View, Text, ScrollView } from "react-native";

import TinyImage from "../tinyImage/tinyImage";
import styles from "./styles";

const TinyListImages = (props)=> {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Last five days</Text>
            <ScrollView style={styles.content}>
                {props.images.map((item)=> <TinyImage key={item.title} {...item}/>)}            
            </ScrollView>
        </View>    
    )
};

export default TinyListImages;