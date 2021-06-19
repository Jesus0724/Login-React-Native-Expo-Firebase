import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';


const SignupScreen = ({navigation}) => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError] = useState('');
   
   const SignUp = async()=>{
       try{
           const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
           navigation.navigate('Signin');
       }catch(err){
           setError(err.message);
       } 
   }

   return <>
    <Input label="E-mail" value={email} onChangeText={setEmail}/>
    <Input label="Contraseña" value={password} onChangeText={setPassword} secureTextEntry/>
    
    {
        error?
        <Text style={{color:'red'}}>{error}</Text>
        :null
    }
    
    <Button title= "Registrarse" onPress={()=> SignUp()}/>
    <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
        <Text>Ya tienes una cuenta? Iniciar sesión...</Text>
    </TouchableOpacity>

    </> 
};

export default SignupScreen;