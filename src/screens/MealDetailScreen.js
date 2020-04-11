import React from 'react';
import {Button, StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
export default function MealDetailScreen({navigation}){
    const meal = navigation.getParam('item');

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText style={styles.mainTitle}>{meal.title}</DefaultText>
                <Text style={styles.detail}><DefaultText>Complexity:</DefaultText> {meal.complexity} </Text>
                <Text style={styles.detail}><DefaultText>Duration:</DefaultText> {meal.duration} min</Text>
                <Text style={styles.detail}><DefaultText>Affordability:</DefaultText> {meal.affordability} </Text>
                <Text style={styles.detail}><DefaultText>Gluten Free:</DefaultText> {meal.isGlutenFree ? 'Yes' : 'No'} </Text>
                <Text style={styles.detail}><DefaultText>Vegetarian:</DefaultText> {meal.isVegetarian ? 'Yes' : 'No'} </Text>
                <Text style={styles.detail}><DefaultText>Vegan:</DefaultText> {meal.isVegan ? 'Yes' : 'No'} </Text>
                <Text style={styles.detail}><DefaultText>Lactose Free:</DefaultText> {meal.isLactoseFree ? 'Yes' : 'No'} </Text>


            </View>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {meal.ingredients.map((ingredient, index) => {
                return (
                    <Text key={index} style={styles.ingredient}>{ingredient}</Text>
                );
            })}
            <DefaultText style={styles.title}>Steps</DefaultText>
            {meal.steps.map((step, index) => {
                return (
                    <Text key={index} style={styles.step}>{index+1} - {step}</Text>
                );
            })}

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    mainTitle: {
        fontSize: 25,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        fontSize: 16,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        margin: 10
    },
    ingredient: {
        fontSize: 15,
        marginLeft: 10,
        padding: 5
    },
    step:{
        fontSize: 15,
        marginLeft: 10,
        padding: 5
    }
});
MealDetailScreen.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('item');
    return {
        headerTitle: meal.title.length > 20 ? meal.title.substr(0, 20) + '...' : meal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-star" onPress={() => {}}/>
        </HeaderButtons>
    }
}
