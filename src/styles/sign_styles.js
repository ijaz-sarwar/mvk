import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../colors/Color';
const Style = StyleSheet.create({
    app: {
        flex: 1,

    },
    container: {
        flex: 1,
    },
    signincontainer: {
        flex: 0.5,
    },
    img: {
        height: '100%',
        width: '100%',

    },
    signintextinput: {
        flex: 0.5,
        left: 30,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        color: COLORS.primary,
        textAlign: 'left',
        fontSize: 40,
        bottom: 30
    },
    textinput: {
        fontSize: 20,
        alignSelf: 'flex-start'

    },
    input: {
        height: '10%',
        width: 300,
        fontSize: 10,
        color: COLORS.secondary,
        alignSelf: 'center',
        lineHeight: 23,
    },
    button: {
        height: '10%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: COLORS.btn,
        borderRadius: 10,

    },
    forgotpasword: {
        alignSelf: 'center',

    },
    textforgotpasword: {
        color: COLORS.btn
    },
    loginwith: {
        display: 'flex', top: 10, flexDirection: 'row'
    },
    loginwithline: {
        bottom: 8,
        borderBottomColor: COLORS.btn,
        borderBottomWidth: 1,
        width: 100
    },
    login: {
        color: COLORS.btn
    },
    socialicon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
    },
    icon: {
        height: 40,
        width: 30,
        paddingRight: 50
    },
    signup: {
        top: 30
    },
    bgimg: {
        width: '100%',
        height: 60
    }


})
export default Style;