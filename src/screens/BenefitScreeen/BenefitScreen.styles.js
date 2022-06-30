import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background
    },

    text: {
        fontSize: 20,
        color: theme.text
    },

    buttonContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: theme.discountBack,
        borderRadius: 10,
        marginTop: 10
    },

    buttonText: {
        fontSize: 20,
        color: theme.discountText
    },
});

export default getStyles