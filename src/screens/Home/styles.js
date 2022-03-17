import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121015',
        padding: 8,
        padding: Platform.OS == 'ios' ? 10:15,
    },
    text: {
        fontSize: 30,
        color: 'white',
        margin: 20
    },
})