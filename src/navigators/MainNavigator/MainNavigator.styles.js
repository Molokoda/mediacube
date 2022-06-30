import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
    categoryContainer: {
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.categoryBorder
    },
});

export default getStyles