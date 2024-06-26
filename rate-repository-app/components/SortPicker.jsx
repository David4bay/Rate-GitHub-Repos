import { Picker } from '@react-native-picker/picker';
import { theme } from './utils/theme';

const SortPicker = ({ selectedCategory, setSelectedCategory }) => {

    const pickerBodyStyle = [
        theme.pickerStyle
    ]

    return (
        <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={pickerBodyStyle}
        >
            <Picker.Item label="Latest Repositories" title="LATEST" />
            <Picker.Item label="Highest Rated Repositories" title="HIGHEST" />
            <Picker.Item label="Lowest Rated Repositories" title="LOWEST" />
        </Picker>
    )
}

export default SortPicker