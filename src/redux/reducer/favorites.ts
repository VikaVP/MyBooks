import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";

const INITIAL_STATE: StateFavorites = {
    favoritesDatas: [],
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                favoritesDatas: [...state.favoritesDatas, action.payload]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                favoritesDatas: (state.favoritesDatas).filter((object: BooksData) => {
                    return object.id !== action.payload
                    })
            };
        default: 
            return state
    }

}

export default reducer;