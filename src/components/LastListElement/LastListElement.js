import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import getStyles from './LastListElement.style';

const LastListElement = ({amount, name, index, onCategoryPress}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={ () => onCategoryPress(name, index)}
        >
            <Text
                style={styles.text}            
            >
                {`Смотреть ещё ${amount}`}
            </Text>
        </TouchableOpacity>
    )
}

export default LastListElement