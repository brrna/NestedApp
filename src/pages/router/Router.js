import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Profile from "../profile/Profile";
import Member from "../member/Member";
import MemberDetail from "../member/MemberDetail";
import MemberUpdate from "../member/MemberUpdate";
import ProfileEdit from "../profile/ProfileEdit";

function Router() {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const MemberStack = () => {
        return(
            <Stack.Navigator>
                <Stack.Screen name="MemberScreen" component={Member} />
                <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
                <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
            </Stack.Navigator>
        )
    }

    const ProfileStack = () => {
        return(
            <Stack.Navigator>
                <Stack.Screen name="ProfileScreen" component={Profile} />
                <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            </Stack.Navigator>
        )
    }

    return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Profile" component={ProfileStack} />
                    <Tab.Screen name="Member" component={MemberStack} />
                </Tab.Navigator>
            </NavigationContainer>
    )
}

export default Router;