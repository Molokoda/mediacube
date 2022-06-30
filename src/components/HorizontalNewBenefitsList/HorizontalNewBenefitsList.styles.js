import { StyleSheet } from "react-native";

export default getStyles = (theme) => StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 15
    },

    categoryName: {
        color: theme.text,
        fontSize: 18,
        fontWeight: "600"
    },

    listContainer: {
        paddingLeft: 10,
    },
})