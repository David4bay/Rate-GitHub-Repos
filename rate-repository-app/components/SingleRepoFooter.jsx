import React from 'react'
import { View, StyleSheet } from 'react-native'
import RepoFooterStat from './RepoFooterStat'
import { styles } from './utils/theme'

const SingleRepoFooter = ({ item }) => {

    const rowStyle = [
        styles.listSyle
    ]

    const listItemStyle = [
        styles.listStyle
    ]

    return (
        <View style={rowStyle}>
            <View style={listItemStyle}>
                <RepoFooterStat item={item?.stargazersCount} textContent={'Stars '} />
            </View>
            <View style={listItemStyle}>
                <RepoFooterStat item={item?.forksCount} textContent={'Forks '} />
            </View>
            <View style={listItemStyle}>
                <RepoFooterStat item={item?.ratingAverage} textContent={'Rating '} />
            </View>
            <View style={listItemStyle}>
                <RepoFooterStat item={item?.reviewCount} textContent={'Reviews '} />
            </View>
        </View>
    )
}

export default SingleRepoFooter