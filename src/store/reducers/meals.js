import { MEALS } from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};
const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:{
            const existingIndex = state.favoriteMeals.findIndex(value => value.id === action.payload);
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals }
            }else{
                const meal = state.meals.find(value => value.id === action.payload)
                return {...state, favoriteMeals: [...state.favoriteMeals, meal]}
            }
        }
        case SET_FILTERS: {
            const appliedFilters = action.payload;
            const updatedFilteredMeals = state.meals.filter((meal) => {
                if(appliedFilters.isGlutenFree && !meal.isGlutenFree) return false;
                if(appliedFilters.isLactoseFree && !meal.isLactoseFree) return false;
                if(appliedFilters.isVegetarian && !meal.isVegetarian) return false;
                if(appliedFilters.isVegan && !meal.isVegan) { return false; }
                return true;
            });
            return { ...state, filteredMeals: updatedFilteredMeals };
        }
        default:
            return state;
    }
};
export default mealsReducer;
