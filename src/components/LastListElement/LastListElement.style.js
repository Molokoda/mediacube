import { StyleSheet } from "react-native";

export default getStyles = (theme) => StyleSheet.create({
    container: {
        width: 200,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: theme.border,
        borderRadius: 10,
        marginRight: 30
    },

    text: {
        color: theme.border
    },
});
