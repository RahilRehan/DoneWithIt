import React from 'react';
import { Image, ImageRequireSource, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

interface Props{
    image: ImageRequireSource,
    title: string,
    subTitle: string,
    onPress: () => void
}

const ListItem: React.FC<Props> = ({image, title, subTitle, onPress}) => {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.listContainer}>
                <Image source={image} style={styles.image}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10,
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: "#6e6969"
    },
    detailsContainer: {
        justifyContent: 'center'
    }
})

export default ListItem;