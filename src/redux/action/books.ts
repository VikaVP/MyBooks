import axios from "axios";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { GET_BOOK_DATAS, GET_BOOK_DETAIL, IS_LOADING, IS_LOADING_DETAIL, SET_MODAL } from "../types";
import { AnyAction } from 'redux';
import { toast } from "react-toastify";

export const getBookDatas = (page: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: IS_LOADING,
            payload: true
        });
        try {
            const data = await axios.get(`https://my-json-server.typicode.com/cutamar/mock/books?_page=${page}&_limit=5`);
            if(data){
                dispatch({
                    type: GET_BOOK_DATAS,
                    payload: {
                        data: data.data,
                        total: data.headers["x-total-count"],
                        page: page
                    }
                });
            } else {
                dispatch({
                    type: GET_BOOK_DATAS,
                    payload: []
                });

                toast.error(
                    'Something was wrong! Try again later',
                    { theme: 'colored' }
                );
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_BOOK_DATAS,
                payload: []
            });
            toast.error(
                'Something was wrong! Try again later',
                { theme: 'colored' }
            );
        };
    };
};

export const getBookDetail = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: IS_LOADING_DETAIL,
            payload: true
        });
        try {
            const data = await axios.get(`https://my-json-server.typicode.com/cutamar/mock/books/${id}`);
            if(data){
                dispatch({
                    type: GET_BOOK_DETAIL,
                    payload: data.data
                });
            } else {
                dispatch({
                    type: GET_BOOK_DETAIL,
                    payload: []
                });

                toast.error(
                    'Something was wrong! Try again later',
                    { theme: 'colored' }
                );
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_BOOK_DETAIL,
                payload: []
            });

            toast.error(
                'Something was wrong! Try again later',
                { theme: 'colored' }
            );
        };
    };
};

export const toggleModal = (open: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: SET_MODAL,
            payload: open
        });
    };
};