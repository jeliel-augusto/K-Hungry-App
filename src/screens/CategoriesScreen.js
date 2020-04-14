import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItemGrid from "../components/CategoryItemGrid";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
export default function CategoriesScreen({ navigation }){
    const renderGridItem = (itemData) => (
        <CategoryItemGrid title={itemData.item.title}
                          color={itemData.item.color}
                          onPress={() => navigation.navigate('Category Meals', {categoryId: itemData.item.id})}/>
    );
    return (<FlatList numColumns={2} keyExtractor={(item => item.id)} data={CATEGORIES} renderItem={renderGridItem}/>);
}
CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-menu" onPress={() => { navigationData.navigation.toggleDrawer(); }}/>
        </HeaderButtons>
    };
}
const styles = StyleSheet.create({

});