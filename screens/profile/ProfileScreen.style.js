import {StyleSheet} from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10
    },
    logOut: {
        color: '#6eabda',
        fontSize: SIZES.medium + 3
    },
    settingsHeaderTitle: {
        fontWeight: "bold",
        fontSize: SIZES.medium,
        color: COLORS.gray2
    },
    settingsListContainer: {
        marginTop: 10,
        padding: SIZES.small,
    },
    settingLabel: {
        fontSize: SIZES.small + 3
    }
});

export default styles;
