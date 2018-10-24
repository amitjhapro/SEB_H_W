import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        flex: 1,
    },
    headerbackground: {
        backgroundColor: "#303030",
        padding: 15,
    },
    headertext: {
        fontSize: 17,
        right: 2,
        color: 'white',
        left: 20,
        top: 3,
        letterSpacing: -0.41
    },
    back: {
        width: 13,
        height: 19,

        top: 6,
        marginLeft: 10
    },
    content:
    {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 20,
        top: 20,
        letterSpacing: -0.43,
        lineHeight: 21,
        height: 60,
    },
    division:
    {
        borderTopWidth: 1,
        marginLeft: 10,
        height: 60,
        borderTopColor: "#e2e0e0",
        borderLeftColor: "#e2e0e0",
        borderRightColor: "#e2e0e0",
        backgroundColor: 'white',
        marginRight: 10,
        flexDirection: 'row'
    },
    division2:
    {
        flexDirection: 'row',
        borderTopWidth: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e2e0e0",
        borderTopColor: "#e2e0e0",
        borderLeftColor: "#e2e0e0",
        borderRightColor: "#e2e0e0",
        backgroundColor: 'white',
        marginRight: 10,
        height: 60,

    },
    sensors:
    {
        marginLeft: 7,
        top: 7
    },
    Text_view:
    {
        flex: 0.75,
        marginLeft: 10
    },
    text_style:
    {
        top: 18,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "300"
    },
    Text_view1:
    {
        flex: 0.58,
        top: 3

    },
    text_style1:
    {
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "300"
    },
    rightarrow:
    {
        top: 20
    },
    sensor_image:
    {
        flex: 0.15
    },
    arrow_image:
    {
        flex: 0.10,

    },
    pdf:
    {
        flex: 0.15,
        top: 10
    },
    installation:
    {
        flex: 0.27,

    }


});