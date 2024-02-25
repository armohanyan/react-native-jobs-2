import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SearchScreen from "./screens/search/SearchScreen";
import FavoriteScreen from "./screens/favorite/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "./constants";
import OfficesScreen from "./screens/office/OficesScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import JobDetails from "./screens/job-details/JobDetailsScreen";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const getTabBarIcon = ({route, focused, color, size}) => {
    const routeName = route.name

    if (routeName === 'Home') {
        return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
    }

    if (routeName === 'Profile') {
        return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
    }

    if (routeName === 'Favorite') {
        return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />;
    }

    if (routeName === 'Offices') {
        return <MaterialCommunityIcons name={focused ? 'office-building' : 'office-building-outline'} size={size} color={color} />
    }

    return <Ionicons name={'ios-information-circle'} size={size} color={color} />;
}


const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
                       screenOptions={({route}) => ({
                           tabBarIcon: options => getTabBarIcon({ route, ...options}),
                           tabBarActiveTintColor: COLORS.primary,
                           tabBarInactiveTintColor: COLORS.gray,
                       })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Offices"
                component={OfficesScreen}
            />

            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="JobDetails" component={JobDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
