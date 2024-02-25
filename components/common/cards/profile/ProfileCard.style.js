import {StyleSheet} from "react-native";

import {COLORS, SHADOWS, SIZES} from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: '100%',
        borderRadius: SIZES.medium,
        height: '100%',
    },
    textContainer: {
        marginLeft: 10
    },
    textEmail: {
        color: COLORS.gray
    },
    textName: {
        fontWeight: "bold",
        fontSize: SIZES.large
    }
});

export default styles;
