import { Text } from "react-native";

import styles from "./styles";

const TextLine = ({textStyle, text})=> {
    return <Text style={[styles.default,textStyle]}>{text}</Text>
};

export default TextLine;