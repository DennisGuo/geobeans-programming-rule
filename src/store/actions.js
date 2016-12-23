import * as types from './types';

/**
 * 设置文档分类
 */
export function setDocType(type){
    return {
        type:types.SET_DOC_TYPE,
        payload:type
    }
}

/**
 * 设置文档名
 */
export function setDocName(name){
    return {
        type:types.SET_DOC_NAME,
        payload:name
    }
}
