import { StyleSheet } from "react-native";

export default getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },

    title: {
        fontSize: 24,
        color: theme.text,
        fontWeight: '600'
    }
})

