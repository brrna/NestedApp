import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    button: {
        backgroundColor: "red",
        height: hp("5%"),
        width: wp("10%"),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 10,
        fontWeight: "bold"
    }
})