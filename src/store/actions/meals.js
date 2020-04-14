export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (mealId) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: mealId
    }
}
export const SET_FILTERS = 'SET_FILTERS';

export const setFilters = filterSettings => {
    return {
        type: SET_FILTERS,
        payload: filterSettings
    }
}
