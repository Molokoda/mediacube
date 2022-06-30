import React from 'react';
import { 
    SafeAreaView,
    FlatList
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import getStyles from './CategoryScreen.styles';
import VerticalBenefitPreview from '../../components/VerticalBenefitPreview';
import { screenNames } from '../../constants/screenNames';

const CategoryScreen = ({navigation, benefitsArray}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    const onBenefitPress = () => {
        navigation.navigate(screenNames.benefit);
    }

   return(
        <SafeAreaView 
            style={styles.container}
        >
            <FlatList
                data={benefitsArray}
                renderItem={ ({item, index, separators}) => <VerticalBenefitPreview
                    key = {item.name}
                    image={item.image}
                    name={item.name}
                    discount={item.discount}
                    onBenefitPress={onBenefitPress}
                />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default CategoryScreen