import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../routes/AuthProvider.js';
import { styles } from '../../styles/styles.js';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SignIn({ navigation }) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput value={email} placeholder='Email' onChangeText={(a) => { setemail(a); }} />
            <TextInput value={password} placeholder='Password' onChangeText={(a) => { setpassword(a); }} />
            <View>
                <Button title='Sign In' onClick={() => { console.log("Signed In") }} />
                <Button title='Not Registered? Sign Up Now!' onClick={() => { navgation.navigate("SignUp"); }} />
            </View>
        </View>
    );
};