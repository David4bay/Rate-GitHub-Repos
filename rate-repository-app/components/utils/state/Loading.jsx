import { View, Text, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import { theme } from '../theme'

const Loading = ({error, loading}) => {

    const redirectButtonStyle = [
        theme.submitButton,
        theme.centerText,
        theme.white
    ]

    const centerTextStyle = [
        theme.centerText
    ]

    const loadingBodyStyle = [
        theme.body
    ]

    return error ? (
    <View>
        <Text style={centerTextStyle}>
            Something went wrong... 
        </Text>
            <Link to="/" style={centerTextStyle} component={Pressable}>
                <Text style={redirectButtonStyle}>
                    Go back
                </Text>
            </Link>
    </View>
    ) :
    (
    <View style={loadingBodyStyle}>
        <Text>
            Loading...
        </Text>
    </View>
    )
}

export default Loading