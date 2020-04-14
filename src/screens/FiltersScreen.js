import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../consts/Colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";

const FilterSwitch = ({onValueChange, value, label}) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch value={value} onValueChange={onValueChange}
                    trackColor={{true: Colors.accentColor}}
                    thumbColor={Colors.accentColor}/>
        </View>
    );
}
export default function FiltersScreen({navigation}){
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree,
            isVegetarian,
            isVegan,
            isLactoseFree
        }
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isVegetarian, isVegan, isLactoseFree, dispatch]);

    useEffect(() => {
        //This will be merged with my current params normaly
        navigation.setParams({saveFilters});
    }, [saveFilters]);
    return (<View style={styles.container}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch onValueChange={(value) => setIsGlutenFree(value)} value={isGlutenFree} label="Gluten-free"/>
        <FilterSwitch onValueChange={(value) => setIsVegetarian(value)} value={isVegetarian} label="Vegetarian"/>
        <FilterSwitch onValueChange={(value) => setIsLactoseFree(value)} value={isLactoseFree} label="Lactose-free"/>
        <FilterSwitch onValueChange={(value) => setIsVegan(value)} value={isVegan} label="Vegan"/>
    </View>);
}
FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-menu" onPress={() => { navigationData.navigation.toggleDrawer(); }}/>
            </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={
                        navigationData.navigation.getParam('saveFilters')
                }/>
            </HeaderButtons>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'roboto-mono-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        width: '80%'
    }
});
