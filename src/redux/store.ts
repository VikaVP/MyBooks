import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let globalStore = createStore(persistedReducer, applyMiddleware(reduxThunk));

let persistor = persistStore(globalStore);

export {globalStore, persistor};

export type AppDispatch = typeof globalStore.dispatch;
export type RootState = ReturnType<typeof globalStore.getState>;