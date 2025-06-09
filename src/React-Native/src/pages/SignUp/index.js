import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";

import * as Animatable from 'react-native-animatable'


import {useNavigation } from '@react-navigation/native'

export default function SignUp () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Nome</Text>
                <TextInput 
                placeholder="Digite um nome"
                style={styles.input}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput 
                placeholder="Digite um e-mail"
                style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                secureTextEntry={true}
                placeholder="Digite sua senha"
                style={styles.input}
                />

                <Text style={styles.title}>Confirmar senha</Text>
                <TextInput 
                secureTextEntry={true}
                placeholder="Digite sua senha novamente"
                style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonTextVoltar}>Voltar</Text>
                </TouchableOpacity>
            </Animatable.View>
            

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffa500'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ffa500',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        martinTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonVoltar: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        martinTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextVoltar: {
        color: '#6E6E6E',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        martinTop : 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
})