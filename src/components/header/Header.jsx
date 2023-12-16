import { Image, Text, View } from "react-native";

import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLeft} >
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.containerRight} >
                <Image style={styles.image} source={ require('../../../assets/nasa_logo.png')} />
            </View>
        </View>
    );
};

export default Header;