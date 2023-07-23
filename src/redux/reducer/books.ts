import { GET_BOOK_DATAS, GET_BOOK_DETAIL, IS_LOADING, IS_LOADING_DETAIL, SET_MODAL } from "../types";

const INITIAL_STATE = {
    bookDatas: [],
    loading: false,
    total: 0,
    currentPage: 1,
    bookDetail: {},
    loadingDetail: false,
    modalOpen: false
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_BOOK_DATAS:
            return {
                ...state, bookDatas: action.payload.data, total: action.payload.total, currentPage: action.payload.page, loading: false
            };
        case IS_LOADING:
            return {
              ...state, loading: action.payload
            };
        case GET_BOOK_DETAIL:
            return {
                ...state, bookDetail: action.payload, loadingDetail: false
            };
        case IS_LOADING_DETAIL:
            return {
                ...state, loadingDetail: action.payload
            };
        case SET_MODAL:
            return {
                ...state, modalOpen: action.payload
            };
        default: 
            return state
    }

}

export default reducer;