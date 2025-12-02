import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { StyleSheet } from "react-native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);



    const login = async() => {
        try{
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Login!');
        } catch(e: any){
            Alert.alert('Login failed: ' + e.message);
            console.log(e);
        }
    }

    const signUp = async() => {
        try{
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('Please check your email to confirm');
        } catch(e: any){
            Alert.alert('Registration failed: ' + e.message);
            console.log(e);
        }
    }

    return(
        <View style = {styles.container}>
            <TextInput style = {styles.field}
                onChangeText={setEmail}
                autoCorrect = {false}>
            </TextInput>

            <TextInput style = {styles.field} 
                onChangeText={setPassword}
                secureTextEntry>
            </TextInput>
            <Text>
                {email} {password}
            </Text>
            
            <Button onPress={login} title="Login"/>
            <Button onPress={signUp} title="Sign Up"/> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan', 
        flex: 1, justifyContent:'center',
        marginHorizontal: 20
    },
    field: {
        height: 50,
        padding: 10,
        borderWidth: 2,
        borderRadius: 13,
        margin: 5,
        backgroundColor: 'white',
        marginVertical: 5   //The text will start a little bit further
    }
})

export default Login;