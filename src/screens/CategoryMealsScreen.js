import React from 'react';
import {StyleSheet, View} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';
import DefaultText from "../components/DefaultText";

export default function CategoryMealsScreen({navigation}){
    const categoryId = (navigation.getParam('categoryId'));
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const meals = availableMeals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
    if(meals.length === 0) {
        return (
            <View style={styles.noContent}>
                <DefaultText>No meals found, check your filters</DefaultText>
            </View>
        )
    }
    return (
        <MealList listData={meals} navigation={navigation}/>
    );
}
CategoryMealsScreen.navigationOptions = ({navigation}) => {
    const categoryId = (navigation.getParam('categoryId'));
    const category = CATEGORIES.find((item)=>item.id === categoryId);
    return {
        headerTitle: category.title
    }
};
const styles = StyleSheet.create({
    noContent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
