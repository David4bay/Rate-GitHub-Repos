import { View, Text } from 'react-native'

const Loading = ({error, loading}) => {
    return error ? (
    <View>
        <Text>
            Something went wrong...
        </Text>
    </View>
    ) :
    (
        <View>
        <Text>
            Loading...
        </Text>
    </View>
    )
}

export default Loading