import { StyleSheet } from "react-native";

export default getStyles = (theme) => StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.categoryBackground,
        borderRadius: 10,
        marginHorizontal: 5
    },

    activeContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.categoryActiveBackground,
        borderRadius: 10,
        marginHorizontal: 5
    },

    text: {
        color: theme.text,
        fontSize: 14,
    },

    activeText: {
        color: theme.categoryActiveText,
        fontSize: 14
    }
})