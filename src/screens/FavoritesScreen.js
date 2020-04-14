import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

export default function FavoritesScreen({navigation}){
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    if(favoriteMeals.length === 0 || !favoriteMeals){
        return (
            <View style={styles.content}>
                <DefaultText>No favorites meals found. Start adding some!</DefaultText>
            </View>
        )
    }
    return (<MealList listData={favoriteMeals} navigation={navigation} />);
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-menu" onPress={() => { navigationData.navigation.toggleDrawer(); }}/>
        </HeaderButtons>
    };
}
