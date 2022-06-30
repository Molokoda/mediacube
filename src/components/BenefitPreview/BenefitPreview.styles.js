import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
    container: {
        paddingRight: 20
    },

    imageContainer: {
        marginBottom: 10
    },

    image: {
        width: 200,
        height: 100,
        borderRadius: 10
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

export default getStyles