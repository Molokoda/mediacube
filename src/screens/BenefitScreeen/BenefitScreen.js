import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getStyles from './BenefitScreen.styles'

const BenefitScreen = ({navigation}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    const onBackPress = () => {
        navigation.goBack();
    }

    return(
        <View 
            style={styles.container}
        >
            <Text
                style={styles.text}
            >
                Empty Benefit Screen
            </Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onBackPress}
            >
                <Text
                    style={styles.buttonText}
                >
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BenefitScreen