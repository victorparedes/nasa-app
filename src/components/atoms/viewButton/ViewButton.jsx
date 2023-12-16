import { Button, View } from "react-native";
import styles from "./styles";

const ViewButton = ()=> {
    return (
        <View style={styles.buttonContainer}>
            <Button title="View" />
        </View>    
    );
};

export default ViewButton;