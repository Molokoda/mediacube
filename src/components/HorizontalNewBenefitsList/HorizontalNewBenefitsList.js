import React from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import NewBenefitPreview from '../NewBenefitPreview';
import { useTheme } from '@react-navigation/native';
import getStyles from './HorizontalNewBenefitsList.styles';

const HorizontalNewBenefitsList = ({benefits, onBenefitPress}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.categoryName}>
                    {"Новинки"}
                </Text>
                <View></View>
            </View>
            <FlatList
                style={styles.listContainer}
                data={benefits}
                renderItem={ ({item, index, separator}) => <NewBenefitPreview
                    key = {item.name}
                    image={item.image}
                    discount={item.discount}
                    onBenefitPress={onBenefitPress}
                />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalNewBenefitsList