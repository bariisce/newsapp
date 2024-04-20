import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        marginTop: 3,
    },
    inner_container: {
        padding: 10,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'right',
    }
})