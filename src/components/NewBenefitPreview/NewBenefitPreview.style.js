import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
    container: {
        paddingRight: 20
    },

    imageContainer: {
        marginBottom: 10
    },

    image: {
        width: 250,
        height: 125,
        borderRadius: 10,
        resizeMode: 'cover'
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
})  

export default getStyles