import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import getStyles from './MainScreen.styles';
import { 
    mockCategoriesBenefits,
    mockNewBenefits
} from '../../mockData/benefits';
import HorizontalBenefitsList from '../../components/HorizontalBenefitsList';
import HorizontalNewBenefitsList from '../../components/HorizontalNewBenefitsList';
import { screenNames } from '../../constants/screenNames';

const MainScreen = ({navigation, onCategoryPress}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    const onBenefitPress = () => {
        navigation.navigate(screenNames.benefit)
    }

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
        >   
            <HorizontalNewBenefitsList
                benefits={mockNewBenefits}
                onBenefitPress={onBenefitPress}
            />
            {
                mockCategoriesBenefits.map( (categoryBenefits, index) => {
                    return(
                        <HorizontalBenefitsList 
                            key={categoryBenefits.categoryName}
                            name={categoryBenefits.categoryName}
                            benefits={categoryBenefits.benefits}
                            onBenefitPress={onBenefitPress}
                            onCategoryPress={onCategoryPress}
                            index={index}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default MainScreen