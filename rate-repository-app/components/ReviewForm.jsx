import { View, Text, TextInput, Pressable } from 'react-native'
import useLoggedIn from './utils/hooks/useLoggedIn'
import { useNavigate } from 'react-router'
import Constants from 'expo-constants';
import { useFormik } from 'formik'
import { useEffect } from 'react'
import * as yup from 'yup'
import { theme } from './utils/theme';
import useCreateReview from './utils/hooks/useCreateReview';

const initialValues = {
    ownerName: '',
    rating: 0,
    repositoryName: '',
    text: ''
}


const ReviewForm = () => {
    
    const validationSchema = yup.object().shape({
        ownerName: yup.string().required('Repository owner name is required'),
        repositoryName: yup.string().required('Repository name is required'),
        rating: yup.number().required('Rating is required')
        .min(0, 'Rating must be atleast 0')
        .max(100, 'Rating must be at most 100'),
        text: yup.string().optional()
    })
    
    const navigate = useNavigate() 

    const user = useLoggedIn()

    const [submitReview] = useCreateReview()

    
    useEffect(() => {
        if (!user?.data?.me?.id && Constants.expoConfig.extra.NODE_ENV !== 'test') {
            navigate("/")
        }
    }, [user?.data?.me?.id])
    
    
    const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
        try {
            const review = { ownerName, repositoryName, rating: Number(rating), text }
            const { data } = await submitReview(review)
    
            navigate(`/repository/${data.repository.respositoryId}`)
        } catch(err) {
            console.error('Error submittin review', err)
        }
    }

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
        theme.signInComponent,
        { paddingTop: 10 }
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
                placeholder='Repository owner name'
                value={formik.handleChange.ownerName}
                onChangeText={formik.handleChange('ownerName')}
                onBlur={formik.handleBlur('ownerName')}
                />
            </View>
                {formik.touched.ownerName && <Text style={errorStyle}>{formik.errors.ownerName}</Text>}
            <View style={borders}>
                <TextInput
                style={inputStyle}
                placeholder='Repository name'
                value={formik.handleChange.repositoryName}
                onChangeText={formik.handleChange('repositoryName')}
                onBlur={formik.handleBlur('repositoryName')}
                />
            </View>
                {formik.touched.repositoryName && <Text style={errorStyle}>{formik.errors.repositoryName}</Text>}
            <View style={borders}>
                <TextInput
                style={inputStyle}
                placeholder='Rating between 0 and 100'
                value={formik.handleChange.rating}
                onChangeText={formik.handleChange('rating')}
                onBlur={formik.handleBlur('rating')}
                />
            </View>
                {formik.touched.rating && <Text style={errorStyle}>{formik.errors.rating}</Text>}
            <View style={borders}>
                <TextInput
                style={reviewStyle}
                placeholder='Review'
                value={formik.handleChange.text}
                onChangeText={formik.handleChange('text')}
                onBlur={formik.handleBlur('text')}
                textAlignVertical='top'
                multiline
                />
            </View>
                {formik.touched.text && <Text style={errorStyle}>{formik.errors.text}</Text>}
            <Pressable style={submitButtonStyle} onPress={formik.handleSubmit}>
                <Text style={submitButtonText}>Create a review</Text>
            </Pressable>
        </View>
    )
}

export default ReviewForm