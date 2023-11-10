import { SafeAreaView, Text } from "react-native";
import Button from "../../components/button/Button";

function Profile({navigation}) {

    const handleProfileEdit = () => {
        navigation.navigate("ProfileEdit")
    }

    return(
        <SafeAreaView>
            <Text>
                <Button text={"profile"} onPress={handleProfileEdit} />
            </Text>
        </SafeAreaView>
    )
}

export default Profile;