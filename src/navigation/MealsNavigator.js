import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../consts/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons} from '@expo/vector-icons';
import FiltersScreen from "../screens/FiltersScreen";
import { Text } from 'react-native';
const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTitleStyle: {
            fontFamily: 'roboto-mono'
        },
        headerTintColor: '#FFF'
    }
}
const MealsNavigator = createStackNavigator({
    'Categories': {screen: CategoriesScreen},
    'Category Meals': {screen: CategoryMealsScreen},
    'Meal Detail': {screen: MealDetailScreen},
}, defaultStackNavOptions);
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    'Meal Detail': MealDetailScreen
}, defaultStackNavOptions);
const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meal: { screen: MealsNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor} />
                },
                tabBarColor: Colors.primaryColor,
            tabBarLabel: <Text style={{fontFamily: 'roboto-mono'}}>Meals</Text>
            }
        },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: <Text style={{fontFamily: 'roboto-mono'}}>Your favorite</Text>,
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={30} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor,

        }
    }
}, {
    activeColorLight: 'white',
    shifting: true,
    // barStyle: {
    //     backgroundColor: Colors.primaryColor
    // }

});
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, defaultStackNavOptions)
const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }
    },
    Filters: {screen: FiltersNavigator}
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'roboto-mono'
        }
    }
});
export default createAppContainer(MainNavigator);