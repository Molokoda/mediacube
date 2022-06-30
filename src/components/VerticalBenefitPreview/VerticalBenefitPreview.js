import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import getStyles from './VerticalBenefitPreview.style';

const VerticalBenefitPreview = ({name, image, discount, onBenefitPress}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    return(
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={onBenefitPress}
            >
                <Image 
                    style={styles.image}
                    source={image}
                />
                <Text style={styles.discount}>
                    {discount}
                </Text>
            </TouchableOpacity>
            <Text 
                style={styles.name}
            >
                {name}
            </Text>
        </View>
    )
}

export default VerticalBenefitPreview