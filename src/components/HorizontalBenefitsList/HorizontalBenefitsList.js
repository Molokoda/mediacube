import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native'
import { useTheme } from "@react-navigation/native";
import getStyles from './HorizontalBenefitsList.styles'
import BenefitPreview from "../BenefitPreview";
import LastListElement from "../LastListElement";

const HorizontalBenefitsList = ({name, benefits, onBenefitPress, onCategoryPress, index}) => {
    const {colors} = useTheme();
    const styles = getStyles(colors);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.categoryName}>
                    {name}
                </Text>
                <TouchableOpacity
                    onPress={() => onCategoryPress(name, index)}
                >
                    <Text style={styles.textLink}>
                        {"Все"}
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.listContainer}
                data={benefits.slice(0,4)}
                renderItem={ ({item, index, separator}) => <BenefitPreview
                    key = {item.name}
                    image={item.image}
                    name={item.name}
                    discount={item.discount}
                    onBenefitPress={onBenefitPress}
                />}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={
                    benefits.length > 4 ?
                    () => <LastListElement 
                        amount={benefits.length - 4}
                        name={name}
                        index={index}
                        onCategoryPress={onCategoryPress}
                    /> :
                    () => <View></View>
                }
                
            />
        </View>
    )
}

export default HorizontalBenefitsList