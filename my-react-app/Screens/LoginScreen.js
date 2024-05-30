// her importeres ting og tang

import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

// 


// LOGIN - går til homescreen

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [] )

//


// ERROR HANDLING 

const [showErrors, setShowErrors] = useState(false)
const [errors, setErrors] = useState({});

const getErrors = (email, password) => {
  const errors = {}
  if(!email){
    errors.email="Please Enter Email";
  }else if (!email.includes("@") || !email.includes(".com")){
    errors.email = "Please Valid Email"
  }

  if (!password) {
    errors.password = "Skriv inn passord"
  }else if (password.length < 6) {
    errors.password = "Passord må være minst 6 karakterer"
  }
  return errors;
}

//


// SIGN UP
    
const handleSignUp =async (e) => {
  const errors = getErrors(email,password);
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user.email)
  } catch (error) {
    if (Object.keys(errors).length > 0){
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors)
    } 
  }
  return errors;
  }

//

// LOGIN - handles login

const handleLogin =async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password)
    console.log("login funka")
  } catch (error) {
    console.log(error.message)
  }
};

//


//

  return (
    <KeyboardAvoidingView
        style= {styles.container}
        behaviour="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email"
                value = {email}
                onChangeText={text => setEmail(text) }
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                value = {password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >

                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
        
                <Text style={styles.buttonOutlineText}>Register</Text>

            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  )
}


//

export default LoginScreen

// her kommer den mest beroligende delen av programmering: 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  inputContainer:{
    width: '80%'
  },
  input:{
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  button:{
    backgroundColor: '#67BFFF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alightItems: 'center'
  },
    
  buttonText:{ 
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    },

  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#67BFFF',
    borderWidth: 2
    },
    
  buttonOutlineText:{
    color: '#67BFFF',
    fontWeight: '700',
    fontSize: 16,
  },
})