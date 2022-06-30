import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
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

export default getStyles