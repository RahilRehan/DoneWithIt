import React from 'react';
import { Image, ImageRequireSource, View, StyleSheet } from 'react-native';
import AppText from './AppText';

interface Props{
    image: ImageRequireSource,
    title: string,
    subTitle: string
}

const ListItem: React.FC<Props> = ({image, title, subTitle}) => {
    return (
        <View style={styles.listContainer}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row'
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