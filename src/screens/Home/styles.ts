import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#FF8921',
        opacity: 0.7,
        padding: 24,
        paddingTop: 36
    },
    eventName: {
      color: '#000',
      fontSize: 32,
      fontWeight: 'bold',
      opacity: 1
    },
    eventDate: {
      color: '#1f1e25',
      fontSize: 16
    },
    input: {
      flex: 1,
      backgroundColor: '#1f1e25',
      borderRadius: 8,
      color: 'white',
      padding: 16,
      fontSize: 16,
      marginRight: 3,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 7,
      backgroundColor: "#31CF67",
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
    listEmpty: {
      color: '#000',
      fontSize: 14,
      textAlign: 'center',
    }
  });