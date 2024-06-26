import Constants from 'expo-constants';
import { StyleSheet } from 'react-native'

export const theme = {
    textStyle: {
        fontSize: 16,
    },
    appBarColor: '#24292e',
    profileTitle: {
        fontWeight: 900
    },
    profileGap: {
        paddingTop: 3,
        paddingBottom: 3
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
    },
      fontSizes: {
        body: 14,
        subheading: 14,
    },
      fonts: {
        android: 'Roboto',
        iOS: 'Arial'
    },
      fontWeights: {
        normal: 400,
        bold: 700,
    },
    languageStyle: {
        padding: 5
    },
    boldText: {
        fontWeight: 700
    },
    repoNumberStat: {
        color: '#586069',
        fontWeight: 400
    },
    wrapText: {
        color: '#586069',
        fontWeight: 500,
        // flexWrap: 'wrap',
        marginRight: 45
    },
    signInComponent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 8
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
    },
    submitButton: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#0366d6',
        fontWeight: 700,
        width: 200,
        marginTop: 15
    },
    centerText: {
        textAlign: 'center'
    },
    white: {
        color: '#ffff'
    },
    inputStyle: {
        fontSize: 16,
        color: 'grey',
        padding: 9,
        textAlign: 'left',
        width: 300,
    },
    borders: {
        borderColor: '#000', 
        borderWidth: 1,       
        paddingHorizontal: 10,
        borderRadius: 5,      
    },
    largeText: {
        fontWeight: 500
    },
    errorStyle: {
        color: '#d73a4a',
        width: 300,
        textAlign: 'left'
    },
    profileLinkStyle: {
        display: 'flex',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#0366d6',
        maxWidth: 'fit-content',
        marginTop: 15,
        marginRight: 12
    },
    profileLinkText: {
        color: '#ffffff',
        fontWeight: 500,
        fontSize: 16
    },
    textInputStyle: {
        width: 300, 
        height: 200,
        textAlign: 'left',
        width: 300,
        color: '#586069',
        textAlignVertical: 'top',
        padding: 9,
        fontSize: 16 
    },
    searchBarContainerStyle: {
        backgroundColor: '#586069'
    },
    searchBarStyle: {
        backgroundColor: '#ffffff',
        padding: 8, 
        margin: 5
    },
    pickerStyle: {
        height: 50,
        backgroundColor: 'lightgray',
        marginBottom: 15,
    }
}

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBarColor,
        minWidth: 100,
      },
      textStyle: {
        fontSize: 12,
        color: '#fff',
        padding: 13,
      },
      horizontal: {
        display: 'flex',
        flexDirection: 'row'
      },
      separator: {
        height: 10, 
        backgroundColor: theme.colors.textSecondary,
        width: '100',
        marginTop: 15
    },
    container: {
        paddingLeft: 10
    },
      imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    contentStyle: {
      display: 'flex',
        flexDirection: 'row'
    },
    marginTop: {
      marginTop: 20
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
    },
    listSyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15
    },
    listStyle: {
        display: 'flex',
        flexDirection: 'column-reverse',
        margin: 5,
        alignItems: 'center'
    },
    ratingStyle: {
        borderColor: theme.colors.primary,
    },
    contentStyle: {
        display: 'flex',
        flexDirection: 'column',
        margin: 8,
        marginTop: 15
    },
    headerStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    textPrimary: {
        color: theme.colors.textPrimary,
        fontWeight: 500,
        fontSize: 15
    },
    textSecondary: {
        color: theme.colors.textSecondary,
    },
    textRating: {
        color: theme.colors.primary,
    },
    centerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
        borderColor: theme.colors.primary,
        borderWidth: 3
    },
    textContent: {
        color: theme.colors.textPrimary,
        fontWeight: 400,
        fontSize: 14
    },
    container: {
        paddingLeft: 10
      },
  
      imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 5
      },
  
      marginTop: {
        marginTop: 20
      }
})

export const singleViewStyling = StyleSheet.create({
    contentStyle: {
     display: 'flex',
     flexDirection: 'row'
    }
})