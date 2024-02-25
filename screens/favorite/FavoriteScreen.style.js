import {StyleSheet} from "react-native";

import {COLORS, FONT, SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: SIZES.medium,
    },
    cardContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    card: {
        margin: SIZES.small - 6,
        overflow: 'scroll'
    }
});

export default styles;
