import { SafeAreaView, Text } from "react-native";
import Button from "../../components/button/Button";

function Member({navigation}) {

    const handleMemberDetail = () => {
        navigation.navigate("MemberDetailScreen")
    }

    return(
        <SafeAreaView>
            <Text>
                <Button text={"member"} onPress={handleMemberDetail} />
            </Text>
        </SafeAreaView>
    )
}

export default Member;