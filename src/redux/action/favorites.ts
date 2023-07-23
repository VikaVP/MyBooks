import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";
import { AnyAction } from 'redux';
import { toast } from 'react-toastify';

export const addToFavorites = (data: BooksData): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: data
        });

        toast.success(
            'Successfully added to favorites',
            { theme: 'colored' }
        );
    };
};

export const removeFromFavorites = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: REMOVE_FROM_FAVORITES,
            payload: id
        });

        toast.success(
            'Successfully remove from favorites',
            { theme: 'colored' }
        );
    };
};