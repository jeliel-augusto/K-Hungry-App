import React from 'react';

import {FlatList, StyleSheet, View} from "react-native";
import CategoryMealItem from "./CategoryMealItem";

export default function MealList({listData, navigation}) {
    const renderMealItem = (itemData) => {
        return <CategoryMealItem item={itemData.item} onPress={() => {
            navigation.push('Meal Detail', { item: itemData.item });
        }}/>
    }
    return (
        <View>
            <FlatList data={listData} renderItem={renderMealItem} keyExtractor={item => item.id} />
        </View>
    )
}