import React from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import { CATEGORIES, MEALS} from "../data/dummy-data";
import CategoryMealItem from "../components/CategoryMealItem";
import MealList from "../components/MealList";

/*
* <Button title="Go to details" onPress={() => {
            // navigation.push('CategoryMeals')

            * Pushing works and go to the same screen if necessary;
            * Maybe reusing the same screen with different content
            *
navigation.navigate('MealDetail')
}} />
<Button title="Go back" onPress={() => {
    //navigation.pop(); also backs, only if stack navigator;
    navigation.goBack();
}} />
*
*
*
*
*
* */
export default function CategoryMealsScreen({navigation}){
    const categoryId = (navigation.getParam('categoryId'));
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
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

});