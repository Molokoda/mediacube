import React, {useState, useRef} from 'react'
import { View, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenNames } from '../../constants/screenNames'; 
import { mockCategoriesArray, mockCategoriesBenefits } from '../../mockData/benefits';
import getStyles from './MainNavigator.styles'
import { useTheme } from '@react-navigation/native';
import MainScreen from '../../screens/MainScreen';
import BenefitScreen from '../../screens/BenefitScreeen';
import CategoryScreen from '../../screens/CategoryScreen';
import Category from '../../components/Category';
import {navigate} from '../RootNavigation';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const [currentCategory, setCurrentCategory] = useState(mockCategoriesArray[0]);
    const {colors} = useTheme();
    const styles = getStyles(colors);
    const categoryRef = useRef()


    const onCategoryPress = (name, index) => {
        setCurrentCategory(name);
        categoryRef.current.scrollToIndex({index: index});
        navigate(screenNames.category)
    }

    const onAllPress = (name, index) => {
        setCurrentCategory(name);
        categoryRef.current.scrollToOffset({offset: 0});
        navigate(screenNames.main)
    }

    return(
        <>
            <View
                style={styles.categoryContainer}
            >
                <FlatList
                    ref={categoryRef}
                    data={mockCategoriesArray.slice(1,)}
                    ListHeaderComponent={ () => <Category
                        key={mockCategoriesArray[0]}
                        index={0}
                        name={mockCategoriesArray[0]}
                        isActive={currentCategory === mockCategoriesArray[0]}
                        onCategoryPress={onAllPress}
                    />}
                    renderItem={ ({item, index, separator}) => <Category 
                        key={item}
                        index={index}
                        name={item}
                        isActive={currentCategory === item}
                        onCategoryPress={onCategoryPress}
                    />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Stack.Navigator 
                initialRouteName={screenNames.main} 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={screenNames.main}>
                    { 
                        props => <MainScreen 
                            {...props} 
                            onCategoryPress={onCategoryPress}
                        />
                    }
                </Stack.Screen>

                <Stack.Screen name={screenNames.benefit}>
                    { props => <BenefitScreen {...props}/>}
                </Stack.Screen>

                <Stack.Screen name={screenNames.category}>
                    { props => <CategoryScreen 
                        {...props} 
                        benefitsArray={ 
                            mockCategoriesBenefits.find( categoryBenefits => categoryBenefits.categoryName === currentCategory)?.benefits
                        } 
                    />}
                </Stack.Screen>
            </Stack.Navigator>
        </>
    )
}

export default MainNavigator