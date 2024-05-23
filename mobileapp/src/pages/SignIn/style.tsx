import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    tittleConteiner: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    logoFather: {
        width: "140%",
        height: "80%",
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    formularyConteiner: {
        flex: 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: "hidden",
    },
    formFather: {
        width: "100%",
        alignItems: "center",
    },
    formTittle: {
        width: "100%",
        alignItems: "center",
        marginBottom: 60,
    },
    tittle: {
        fontSize: 50,
        fontWeight: "500",
        marginBottom: 5,
    },
    description: {
        color: "grey",
        fontSize: 16,
    },
    form: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    inputConteiner: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
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
    bnt: {
        alignItems: "center",
        width: "90%",
        height: 50,
        backgroundColor: "#920000",
        borderRadius: 20, 
        marginTop: 30,
        justifyContent: "center"   
    },
    textBnt: {
        fontSize: 24,
        fontWeight: "500", 
        color: "white",
     },
     rememberEndForgot: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        marginBottom: 10,
     },
     rememberMe: {
        fontSize: 16,
        color: "grey",
     },
     forgotPassword: {
        fontSize: 16,
        color: "grey",  
     },
     pwdWrongConteiner: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "#FFA1A1",
        padding: 15,
        borderRadius: 30,
        position: "absolute",
        top: 10,
        zIndex: 9999,
         
     },
     pwdWrongText: {
        color: "red",
        fontSize: 16,
     },
     icon: {
        position: "absolute",
        right: "8%",
     },
    textCop: {
        position: "absolute",
        bottom: 30,
    }
})

export default styles;