import React from 'react';
import { Image, ImageSourcePropType, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

interface Props {
    image: ImageSourcePropType,
    title: string,
    subTitle: string
}

const Card: React.FC<Props> = ({image, title, subTitle}) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 10,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width: "100%",
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card;