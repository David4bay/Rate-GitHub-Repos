import Constants from 'expo-constants';
import { View, Text, TextInput, Pressable } from 'react-native'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { theme } from './utils/theme'
import * as yup from 'yup'
import useLoggedIn from './utils/hooks/useLoggedIn'
import { useNavigate } from 'react-router'

const initialValues = {
    username: '',
    password: ''
}

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username length must be greater than 4')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be greater than 5')
    .required('Password is required'),
});

const SignIn = ({ onSubmit }) => {
    
    const navigate = useNavigate()

    /* istanbul ignore next */
    const { data } = useLoggedIn()
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    const inputStyle = [
        theme.inputStyle,
    ]

    const errorStyle = [
        theme.errorStyle
    ]

    const borders = [
        theme.borders,
        formik.touched.password && { borderColor: '#00affa' } || 
        formik.touched.username && { borderColor: '#00affa' }
    ]
    
    /* istanbul ignore next */
    useEffect(() => {
        if (data?.me?.id && Constants.expoConfig.extra?.NODE_ENV !== 'test') {
            navigate("/repositories")
        }
    }, [data?.me?.id])

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
        {formik.touched.username && formik.errors.username && (
        <Text style={errorStyle}>{formik.errors.username}</Text>
      )}
        <View style={borders}>
        <TextInput
        style={inputStyle}
        placeholder='Password'
        value={formik.handleChange.password}
        onChangeText={formik.handleChange('password')}
        />
        </View>
        {formik.touched.password && formik.errors.password && (
            <Text style={errorStyle}>{formik.errors.password}</Text>
      )}
        <Pressable style={submitButtonStyle} onPress={formik.handleSubmit}>
            <Text style={submitButtonText}>Sign in</Text>
        </Pressable>
    </View>
  )
}

export default SignIn