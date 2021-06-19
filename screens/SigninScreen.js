import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';


const SigninScreen = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError] = useState('');
   
   const signIn = async()=>{
       try{
           const response = await firebase.auth().signInUserWithEmailAndPassword(email,password);
           navigation.navigate('Home');
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
    
    <Button title= "Iniciar Sesión " onPress={()=> signIn()}/>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>No tienes una cuenta? Registrate aqui...</Text>
    </TouchableOpacity>

    </> 
}

export default SigninScreen;

