import { Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyle"

const Button = (props) => {

    const {onPress, text} = props;

    return(
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>

                <Text
                    style={styles.buttonText}>
                    {text}
                </Text>

        </TouchableOpacity>
    )
}

export default Button;