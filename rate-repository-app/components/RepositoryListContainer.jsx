import RenderItem from './RenderItem';
import { FlatList, View, StyleSheet } from 'react-native';
import { styles, theme } from './utils/theme';
import SearchBar from './SearchBar';
import SortPicker from './SortPicker';

const separatorStyle = [
  styles.separator
]

const ItemSeparator = () => <View style={separatorStyle} />;

export const RepositoryListContainer = ({ repositories, searchedRepo, setSearchedRepo, selectedCategory, setSelectedCategory }) => {

  console.log("repositories", repositories)
  
    return (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={({ id }) => id}
          renderItem={RenderItem}
          ListHeaderComponent={() => (
          <>
            <SearchBar searchedRepo={searchedRepo} setSearchedRepo={setSearchedRepo} />
            <SortPicker selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </>
          )
        }
          />
      );
    };

export default RepositoryListContainer