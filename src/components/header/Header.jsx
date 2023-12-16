import { Image, Text, View } from "react-native";

import styles from "./styles";
import Title from "../atoms/title/title";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLeft} >
                <Title text={'Explore'} />
            </View>
            <View style={styles.containerRight} >
                <Image style={styles.image} source={ require('../../../assets/nasa_logo.png')} />
            </View>
        </View>
    );
};

export default Header;