import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../routes/AuthProvider.js';
import { styles } from '../../styles/styles.js';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SignUp({ navigation }) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [name, setname] = useState('');
    const { setuserName } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <TextInput value={name} placeholder='Name' onChangeText={(a) => { setname(a); }} />
            <TextInput value={email} placeholder='Email' onChangeText={(a) => { setemail(a); }} />
            <TextInput value={password} placeholder='Password' onChangeText={(a) => { setpassword(a); }} />
            <TextInput value={Cpassword} placeholder='Confirm Password' onChangeText={(a) => { setCpassword(a); }} />
            <View>
                <Button title='Sign Up' onClick={() => {
                    if (password != '' && password === Cpassword && name != '' && email != '') {
                        setuserName(name);
                    }
                }} />
                <Button title='Already Registered? Sign In!' onClick={() => { navgation.navigate("SignIn"); }} />
            </View>
        </View>
    );
}
