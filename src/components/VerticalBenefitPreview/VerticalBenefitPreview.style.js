import { StyleSheet, Dimensions } from "react-native";

const width  = Dimensions.get('screen').width

export default getStyles = (theme) => StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },

    imageContainer: {
        marginBottom: 10
    },

    image: {
        width: width - 20,
        height: (width - 20) / 2,
        borderRadius: 20,
        paddingRight: 20
    },

    discount: {
        position: "absolute",
        bottom: 5,
        left: 5,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: theme.discountBack,
        color: theme.discountText,
        borderRadius: 20
    },

    name: {
        fontSize: 16,
        color: theme.text,
    }
})