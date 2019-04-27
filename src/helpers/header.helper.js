import {getItem} from "./localStorage";
import * as _ from "lodash";

export const defaultHelper = (extendHeaders={}) => {
    const token = getItem('qw_tk_vue');
    if (!_.isEmpty(token)) {
        extendHeaders.Authorization = `Bearer ${token.replace('"', "")}`
    }
    return {
        headers: _.extend({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, extendHeaders)
    }
};
