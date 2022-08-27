import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

interface Props {
    image: ImageRequireSource
}

const ListingDetails: React.FC<Props> = ({image}) => {
    return (
       <View>
        <Image source={image} style={styles.image}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: "100%"
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 10
    },
    price:{
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    detailsContainer: {
        padding: 20
    }
})

export default ListingDetails;