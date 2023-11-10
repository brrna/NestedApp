import { SafeAreaView, Text } from "react-native";
import Button from "../../components/button/Button";

function MemberDetail({navigation}) {

    const handleMemberUpdate = () => {
        return(
            navigation.navigate("MemberUpdateScreen")
        )
    }

    return(
        <SafeAreaView>
            <Text>
                <Button text={"MemberUpdate"} onPress={handleMemberUpdate} />
            </Text>
        </SafeAreaView>
    )
}

export default MemberDetail;