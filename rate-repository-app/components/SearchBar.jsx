import { View, TextInput } from 'react-native'
import { theme } from './utils/theme'

const SearchBar = ({ searchedRepo, setSearchedRepo }) => {

    const searchBarContainerStyle = [
        theme.searchBarContainerStyle
    ]
    
    return (
        <View style={searchBarContainerStyle}>
            <View style={theme.searchBarStyle}>
                <TextInput 
                value={searchedRepo}
                onChangeText={(text) => setSearchedRepo(text)}
                placeholder='Search...'
                
                />
            </View>
        </View>
    )
}

export default SearchBar