import React from 'react'
import { 
    TouchableOpacity,
    Text 
} from 'react-native' 
import { useTheme } from '@react-navigation/native'
import getStyles from './Category.styles'

const Category = ({name, index, isActive, onCategoryPress}) => {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return(
        <TouchableOpacity
            style={ isActive ? styles.activeContainer : styles.container }
            onPress={() => {onCategoryPress(name, index)}}
        >
            <Text
                style={ isActive ? styles.activeText : styles.text }
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default Category 