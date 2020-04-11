import React from 'react';
import { StyleSheet, View} from 'react-native';
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export default function FavoritesScreen({navigation}){
    const favorites = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (<MealList listData={favorites} navigation={navigation} />);
}
FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-menu" onPress={() => { navigationData.navigation.toggleDrawer(); }}/>
        </HeaderButtons>
    };
}