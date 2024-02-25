import {SafeAreaView, ScrollView, View, Text} from "react-native";
import {COLORS, icons, images, SIZES} from "../../constants";

const OfficesScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Text>Offices Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OfficesScreen;