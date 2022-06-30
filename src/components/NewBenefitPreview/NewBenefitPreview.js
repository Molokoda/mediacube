import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import getStyles from './NewBenefitPreview.style';

const NewBenefitPreview = ({image, discount, onBenefitPress}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onBenefitPress}
                style={styles.imageContainer}
            >
                <Image 
                    style={styles.image}
                    source={image}
                />
                <Text style={styles.discount}>
                    {discount}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewBenefitPreview