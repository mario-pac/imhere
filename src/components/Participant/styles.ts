import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
    },

    container: {
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        flex: 1,
        height: 56,
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 7,
        backgroundColor: "#A23",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCont: {
        marginLeft: 3,
        marginBottom: 10,
    }
});