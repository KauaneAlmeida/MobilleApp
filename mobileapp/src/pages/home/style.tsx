import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bnt: {
        backgroundColor: "#3E3E3E",
        padding: 15,
        borderRadius: 5
    },
    bntText: {
        color: "white",
        fontSize: 25
    },
    actionSheetConteiner: {
        width: "100%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    iconMimus: {
        position: "absolute",
        top: -25,
    },
    input: {
        width: "90%", 
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 20,
        fontSize: 15,
     },
     alertConteiner: {
        padding: 25,
        width: "60%",
        height: "40%",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        textAlign: "center"
     },
     txtAlert: {
        fontSize: 27,
        fontWeight: "700",
        marginTop: 30,
        textAlign: "center",
     }
})

export default styles