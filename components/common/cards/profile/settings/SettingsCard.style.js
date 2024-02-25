import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../../../../constants";


const styles = StyleSheet.create({
    settingListContainer: {
        marginTop: 2,
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        padding: SIZES.small,
        gap: 10,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    iconsContainer: (bgColor) => ({
        borderRadius: SIZES.small,
        padding: SIZES.small - 2,
        backgroundColor: bgColor
    }),

    icons: {
        width: 25,
        height: 25
    }
});

export default styles;
