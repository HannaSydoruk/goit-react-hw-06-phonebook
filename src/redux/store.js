import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from './contacts/contactsReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer
})

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);