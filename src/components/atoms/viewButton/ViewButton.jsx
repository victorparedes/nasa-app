import { Button, View } from "react-native";
import styles from "./styles";

const ViewButton = ({handleOnPress})=> {
    return (
        <View style={styles.buttonContainer}>
            <Button title="View" onPress={handleOnPress} />
        </View>    
    );
};

export default ViewButton;