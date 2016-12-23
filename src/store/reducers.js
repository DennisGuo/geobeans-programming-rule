import docs from '../config/docs';
import * as types from './types';
/**
 * Root Reducer.
 */

const defaultStore = {
    docs:docs,
    docType:null,
    docName:null
}

export default function rootReducer(state = defaultStore,action){
    let val = action.payload;
    switch(action.type){
        case types.SET_DOC_TYPE:{
            state = Object.assign({},state,{docType: val});
            break;
        }
        case types.SET_DOC_NAME:{
            state = Object.assign({},state,{docName : val});
            break;
        }
        default:break;
    }
    // console.log(JSON.stringify(state));
    return state;
}