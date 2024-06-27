import { Picker } from '@react-native-picker/picker';
import { theme } from './utils/theme';

const SortPicker = ({ selectedCategory, setSelectedCategory }) => {

    const pickerBodyStyle = [
        theme.pickerStyle
    ]

    const disabledStyle = [
        theme.pickerBarContainerStyle
    ]

    return (
        <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={pickerBodyStyle}
        >
            <Picker.Item style={disabledStyle} label="Select an item..." value="" enabled={false} />
            <Picker.Item label="Latest Repositories" value="LATEST" />
            <Picker.Item label="Highest Rated Repositories" value="HIGHEST" />
            <Picker.Item label="Lowest Rated Repositories" value="LOWEST" />
        </Picker>
    )
}

export default SortPicker