import { View, Text, TextInput, Pressable } from 'react-native'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { theme } from './utils/theme'
import * as yup from 'yup'
import useCreateUser from './utils/hooks/userCreateUser'
import { useNavigate } from 'react-router'
import useLoggedIn from './utils/hooks/useLoggedIn'
import useSignin from './utils/hooks/useSigin'
import useAuthStorage from './utils/hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'


const SignUp = () => {
    
    const navigate = useNavigate()
        
    const apolloClient = useApolloClient()
    const [handleNewUser] = useCreateUser()
    const authStorage = useAuthStorage()
    const { data } = useLoggedIn()
    const [signIn] = useSignin()
    
    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }
    
    const onSubmit = async ({ username, password }) => {

        const credentials = { username, password }

        try {

            const newUser = await handleNewUser(credentials)

            const userData = await signIn(credentials)
        
            if (userData?.authenticate?.accessToken) {
                const token = userData.authenticate.accessToken;
                
                const tokenExists = await authStorage.getAccessToken();
        
                if (tokenExists) {
                  await authStorage.removeAccessToken();
                }
        
                await apolloClient.resetStore()
                await authStorage.setAccessToken(token);
        
                navigate('/repositories')
              }
            } catch (e) {
            console.log(e);
            }
    }
    
    const validationSchema = yup.object().shape({
        username: yup
        .string()
        .min(5, 'Username must be at least 5 characters long')
        .max(30, 'Username must be at least 30 characters long')
        .required('Username is required'),
        password: yup
        .string()
        .min(5, 'Password must be at least 4 characters long')
        .max(50, 'Password must be at most 50 characters long')
        .required('Password is required'),
        passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    
    const borders = [
        theme.borders,
        formik.touched.ownerName && { borderColor: '#00affa' } || 
        formik.touched.repositoryName && { borderColor: '#00affa' } ||
        formik.touched.text && { borderColor: '#00affa' } ||
        formik.touched.rating && { borderColor: '#00affa' } 
    ]

    const containerStyle = [
        theme.signInComponent
    ]
    
    const submitButtonStyle = [
        theme.submitButton
    ]
    
    const submitButtonText = [
        theme.centerText,
        theme.white,
        theme.largeText
    ]
    
    
    const inputStyle = [
        theme.inputStyle,
    ]
    
    const errorStyle = [
        theme.errorStyle
    ]

    const reviewStyle = [
        theme.textInputStyle
    ]

    return (
        <View style={containerStyle}>
            <View style={borders}>
                <TextInput 
                style={inputStyle}
                placeholder='Username'
                value={formik.handleChange.username}
                onChangeText={formik.handleChange('username')}
                />
            </View>
            {formik.touched.username && formik.errors.username && <Text style={errorStyle}>{formik.errors.username}</Text>}
            <View style={borders}>
                <TextInput 
                style={inputStyle}
                placeholder='Password'
                value={formik.handleChange.password}
                onChangeText={formik.handleChange('password')}
                secureTextEntry
                />
            </View>
            {formik.touched.password && formik.errors.password && <Text style={errorStyle}>{formik.errors.password}</Text>}
            <View style={borders}>
                <TextInput 
                style={inputStyle}
                placeholder='Password confirmation'
                value={formik.handleChange.passwordConfirmation}
                onChangeText={formik.handleChange('passwordConfirmation')}
                secureTextEntry
                />
            </View>
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && <Text style={errorStyle}>{formik.errors.passwordConfirmation}</Text>}
            <Pressable style={submitButtonStyle} onPress={formik.handleSubmit}>
                <Text style={submitButtonText}>Sign up</Text>
            </Pressable>
        </View>
    )
}

export default SignUp