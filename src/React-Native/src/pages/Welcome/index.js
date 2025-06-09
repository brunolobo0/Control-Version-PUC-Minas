import React from "react";
import {View,Text, StyleSheet, Image, TouchableOpacity, ImageBackgroundComponent} from "react-native";

import * as Animatable from 'react-native-animatable'

import {useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          
         <View style={styles.containerlogos}>
            <Animatable.Image
            animation="flipInY"
              source={require('../../assets/logos.png')}
              style={{width: '100%'}}
              resizeMode="contain"
            />
         </View>

         <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Faça a gestão de seus documentos em qualquer lugar!</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Acessar</Text>
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
    containerlogos: {
        flex:2,
        backgroundColor: '#ffa500',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#6E6E6E'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#ffa500',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: "bold"
    }
})